import {Nav, UL,DIV, DivMenu, DIVshare, DIVtimer,DivTimer, DIVnotif, DivNotif, NotificationContainer, NotificationText, AgentName, TimeAgo, MarkAllAsReadButton } from "./styles";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/auth";



const NavMain = () => {
  const { logout } = useAuth();
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);
  const subMenuRefShare = useRef<HTMLDivElement>(null);
  const subMenuRefTimer = useRef<HTMLDivElement>(null);
  const subMenuRefNotif = useRef<HTMLDivElement>(null);
  const [timestamp, setTimestamp] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [lapsedTime, setLapsedTime] = useState<number>(0);
  const [overallTime, setOverallTime] = useState<number>(0);
  const [record, setRecord] = useState<{ date: string; time: string; description: string } | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editHours, setEditHours] = useState<number>(0);
  const [editMinutes, setEditMinutes] = useState<number>(0);
  const [editSeconds, setEditSeconds] = useState<number>(0);
  const [logs, setLogs] = useState<{ date: string; time: string; action: string; description: string }[]>([]);
  const [description, setDescription] = useState('');
  const [requireDescription, setRequireDescription] = useState(false);


  function toggleMenu() {
    subMenuRef.current?.classList.toggle("open-menu");
  }

  function copyLinkToClipboard() {
    const link = "https://moneycache.com"; // Replace with your desired link

    navigator.clipboard.writeText(link)
      .then(() => {
        setIsLinkCopied(true);
        setTimeout(() => setIsLinkCopied(false), 1000); // Reset the copied state after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  }

  function toggleMenuShare() {
    subMenuRefShare.current?.classList.toggle("open-menu");
    copyLinkToClipboard();
  }

  function toggleMenuNotif() {
    subMenuRefNotif.current?.classList.toggle("open-menu");
    ;
  }

 
  function toggleMenuTimer() {
    subMenuRefTimer.current?.classList.toggle("open-menu");

  }
  useEffect(() => {
    if (isRunning && !isPaused) {
      setStartTime(Date.now() - lapsedTime);
    }
  }, [isRunning, isPaused, lapsedTime]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning && startTime !== null) {
      timer = setInterval(() => {
        if (!isPaused) {
          setLapsedTime(Date.now() - startTime);
        }

        if (shouldStopAtMidnight()) {
          handleStartStop();
        }
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning, startTime, isPaused]);;

  function handleStartStop() {
    if (!isRunning) {
      if (requireDescription && description.trim() === '') {
        alert('Please enter a description.'); // Show an alert if description is required and empty
        return;
      }

      setIsRunning(true);
      setIsPaused(false);
      setStartTime(Date.now() - lapsedTime);
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
      setRecord({ date: currentDate, time: currentTime, description });
      setLogs((prevLogs) => [
        ...prevLogs,
        { date: currentDate, time: currentTime, action: 'Started', description },
      ]);
    } else {
      setIsRunning(false);
      setIsPaused(false);
      if (startTime !== null && !isPaused) {
        const stopTime = Date.now();
        setOverallTime(overallTime + lapsedTime);
        const currentTime = new Date().toLocaleTimeString();
        const recordedTime = formatTime(lapsedTime);
        setLogs((prevLogs) => [
          ...prevLogs,
          { date: record?.date || '', time: currentTime, action: `Stopped at ${recordedTime}`, description },
        ]);
      }
      setStartTime(null);
      setLapsedTime(0);

      const currentHour = new Date().getHours();
      if ((currentHour === 0 || isPaused) && !isRunning) {
        setIsPaused(true);
        setLogs((prevLogs) => [
          ...prevLogs,
          {
            date: record?.date || '',
            time: new Date().toLocaleTimeString(),
            action: 'Timer automatically stopped at 12 AM',
            description,
          },
        ]);
      }
    }
  }


  function shouldStopAtMidnight() {
    const now = new Date();
    return now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0;
  }

  function handlePauseResume() {
    if (!isRunning) {
      return;
    }

    setIsPaused(!isPaused);
    const currentTime = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [...prevLogs, { date: record?.date || '', time: currentTime, action: isPaused ? 'Resumed' : 'Paused', description }]);
  }

  function handleReset() {
    if (!record) {
      return; // If there is no recorded date and time, do nothing
    }
    
    if (window.confirm('Are you sure you want to reset?')) {
      setIsRunning(false);
      setIsPaused(false);
      setStartTime(null);
      setLapsedTime(0);
      setOverallTime(0);
      setRecord(null);
      setEditMode(false);
      setDescription('');

      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();

      setLogs((prevLogs) => [
        ...prevLogs,
        { date: record?.date || '', time: currentTime, action: 'Reset', description },
      ]);
    } else {
      const currentTime = new Date().toLocaleTimeString();
      setLogs((prevLogs) => [
        ...prevLogs,
        { date: record?.date || '', time: currentTime, action: 'Reset canceled', description },
      ]);
    }
  }
  

  function handleEdit() {
    if (!editMode) {
      const hours = Math.floor(overallTime / 3600000);
      const minutes = Math.floor((overallTime % 3600000) / 60000);
      const seconds = Math.floor((overallTime % 60000) / 1000);
      setEditHours(hours);
      setEditMinutes(minutes);
      setEditSeconds(seconds);
      const currentTime = new Date().toLocaleTimeString();
      setLogs((prevLogs) => [...prevLogs, { date: record?.date || '', time: currentTime, action: 'Entered edit mode', description }]);
    } else {
      const editedTime = editHours * 3600000 + editMinutes * 60000 + editSeconds * 1000;
      setOverallTime(editedTime);
      const currentTime = new Date().toLocaleTimeString();
      const editedHours = editHours.toString().padStart(2, '0');
      const editedMinutes = editMinutes.toString().padStart(2, '0');
      const editedSeconds = editSeconds.toString().padStart(2, '0');
      setLogs((prevLogs) => [
        ...prevLogs,
        {
          date: record?.date || '',
          time: currentTime,
          action: `Saved edits - Hours: ${editedHours}, Minutes: ${editedMinutes}, Seconds: ${editedSeconds}`,
          description,
        },
      ]);
    }
    setEditMode(!editMode);
  }

  function handleCancelEdit() {
    setEditMode(false);
    const currentTime = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [...prevLogs, { date: record?.date || '', time: currentTime, action: 'Canceled edit', description }]);
  }

  function formatTime(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
    const [isAllRead, setIsAllRead] = useState(false);

    function handleMarkAllAsRead() {
        // Your logic to mark all notifications as read goes here
      
        setIsAllRead(true); // Set the state to indicate all notifications are read
      }

      !isAllRead && (
        <MarkAllAsReadButton onClick={handleMarkAllAsRead}>
          Mark All as Read
        </MarkAllAsReadButton>
      )

      interface NotificationProps {
        text: string;
        timeAgo: string;
        styles?: React.CSSProperties;
      }
      
      const Notification: React.FC<NotificationProps> = ({ text, timeAgo, styles }) => {
      return (
        <NotificationContainer style={styles}>
          <NotificationText>
            {text} - <AgentName>Agent 1</AgentName>
          </NotificationText>
          <TimeAgo>{timeAgo}</TimeAgo>
        </NotificationContainer>
      );
      };

    return (
    <div style={{backgroundColor:"rgb(220, 220, 220)", width:"100%"}}>
        <div className="hero">

            <Nav style={{width:"100%"}}>

                <div style={{ marginLeft: "100px", fontStyle: "italic" }}>
                    {/* <LogoImg src={Logo}/> */}
                    <i style={{ transform: "rotate(20deg)", color: "#ff8c00" }} className="fas fa-hand-paper"></i>
                    <span style={{ color: "darkblue" }} className="link_name"> Hello, Sales Agent!</span>
                    {/* <i class="fas fa-hand-paper"></i> */}
                </div>
                <UL>
                          
                    
                    <li>
                    <button type="button" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 26 26">
                            <path d="M 16.5625 15.898438 C 16.402344 15.847656 15.398438 15.394531 16.027344 13.484375 L 16.019531 13.484375 C 17.65625 11.800781 18.90625 9.085938 18.90625 6.414063 C 18.90625 2.308594 16.175781 0.15625 13 0.15625 C 9.824219 0.15625 7.109375 2.308594 7.109375 6.414063 C 7.109375 9.097656 8.351563 11.820313 10 13.503906 C 10.640625 15.1875 9.492188 15.8125 9.253906 15.898438 C 5.929688 17.101563 2.03125 19.292969 2.03125 21.457031 C 2.03125 22.039063 2.03125 21.6875 2.03125 22.269531 C 2.03125 25.214844 7.742188 25.886719 13.03125 25.886719 C 18.328125 25.886719 23.96875 25.214844 23.96875 22.269531 C 23.96875 21.6875 23.96875 22.039063 23.96875 21.457031 C 23.96875 19.230469 20.050781 17.054688 16.5625 15.898438 Z"></path>
                        </svg>
                    </button>
                    </li>

                    <li>
                        <button type="button" onClick={toggleMenuShare}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M 15.990234 1.9902344 A 1.0001 1.0001 0 0 0 15.292969 3.7070312 L 17.585938 6 L 17 6 C 10.936593 6 6 10.936593 6 17 A 1.0001 1.0001 0 1 0 8 17 C 8 12.017407 12.017407 8 17 8 L 17.585938 8 L 15.292969 10.292969 A 1.0001 1.0001 0 1 0 16.707031 11.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 20.707031 6.2929688 L 16.707031 2.2929688 A 1.0001 1.0001 0 0 0 15.990234 1.9902344 z M 2.984375 7.9863281 A 1.0001 1.0001 0 0 0 2 9 L 2 19 C 2 20.64497 3.3550302 22 5 22 L 19 22 C 20.64497 22 22 20.64497 22 19 L 22 18 A 1.0001 1.0001 0 1 0 20 18 L 20 19 C 20 19.56503 19.56503 20 19 20 L 5 20 C 4.4349698 20 4 19.56503 4 19 L 4 9 A 1.0001 1.0001 0 0 0 2.984375 7.9863281 z"></path>
                            </svg>
                        </button>
                    </li>

                    <li>
                        <button type="button" onClick={toggleMenuTimer}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 10.9375 3.875 L 10.5 12.0625 L 10.59375 12.9375 L 16.75 18.375 L 17.71875 17.375 L 12.625 11.96875 L 12.1875 3.875 Z"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={toggleMenuNotif}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 50 50">
                                <path d="M 25 0 C 22.800781 0 21 1.800781 21 4 C 21 4.515625 21.101563 5.015625 21.28125 5.46875 C 15.65625 6.929688 12 11.816406 12 18 C 12 25.832031 10.078125 29.398438 8.25 31.40625 C 7.335938 32.410156 6.433594 33.019531 5.65625 33.59375 C 5.265625 33.878906 4.910156 34.164063 4.59375 34.53125 C 4.277344 34.898438 4 35.421875 4 36 C 4 37.375 4.84375 38.542969 6.03125 39.3125 C 7.21875 40.082031 8.777344 40.578125 10.65625 40.96875 C 13.09375 41.472656 16.101563 41.738281 19.40625 41.875 C 19.15625 42.539063 19 43.253906 19 44 C 19 47.300781 21.699219 50 25 50 C 28.300781 50 31 47.300781 31 44 C 31 43.25 30.847656 42.535156 30.59375 41.875 C 33.898438 41.738281 36.90625 41.472656 39.34375 40.96875 C 41.222656 40.578125 42.78125 40.082031 43.96875 39.3125 C 45.15625 38.542969 46 37.375 46 36 C 46 35.421875 45.722656 34.898438 45.40625 34.53125 C 45.089844 34.164063 44.734375 33.878906 44.34375 33.59375 C 43.566406 33.019531 42.664063 32.410156 41.75 31.40625 C 39.921875 29.398438 38 25.832031 38 18 C 38 11.820313 34.335938 6.9375 28.71875 5.46875 C 28.898438 5.015625 29 4.515625 29 4 C 29 1.800781 27.199219 0 25 0 Z M 25 2 C 26.117188 2 27 2.882813 27 4 C 27 5.117188 26.117188 6 25 6 C 23.882813 6 23 5.117188 23 4 C 23 2.882813 23.882813 2 25 2 Z M 27.34375 7.1875 C 32.675781 8.136719 36 12.257813 36 18 C 36 26.167969 38.078125 30.363281 40.25 32.75 C 41.335938 33.941406 42.433594 34.6875 43.15625 35.21875 C 43.515625 35.484375 43.785156 35.707031 43.90625 35.84375 C 44.027344 35.980469 44 35.96875 44 36 C 44 36.625 43.710938 37.082031 42.875 37.625 C 42.039063 38.167969 40.679688 38.671875 38.9375 39.03125 C 35.453125 39.753906 30.492188 40 25 40 C 19.507813 40 14.546875 39.753906 11.0625 39.03125 C 9.320313 38.671875 7.960938 38.167969 7.125 37.625 C 6.289063 37.082031 6 36.625 6 36 C 6 35.96875 5.972656 35.980469 6.09375 35.84375 C 6.214844 35.707031 6.484375 35.484375 6.84375 35.21875 C 7.566406 34.6875 8.664063 33.941406 9.75 32.75 C 11.921875 30.363281 14 26.167969 14 18 C 14 12.261719 17.328125 8.171875 22.65625 7.21875 C 23.320313 7.707031 24.121094 8 25 8 C 25.886719 8 26.679688 7.683594 27.34375 7.1875 Z M 21.5625 41.9375 C 22.683594 41.960938 23.824219 42 25 42 C 26.175781 42 27.316406 41.960938 28.4375 41.9375 C 28.792969 42.539063 29 43.25 29 44 C 29 46.222656 27.222656 48 25 48 C 22.777344 48 21 46.222656 21 44 C 21 43.242188 21.199219 42.539063 21.5625 41.9375 Z"></path>
                            </svg>
                        </button>
                    </li>
                </UL>

                                <DIV className="sub-menu-wrap" id="subMenu" ref={subMenuRef}>
                    <DivMenu className="sub-menu">

                        <a href="/agent/profile" >
                            <p style={{fontSize:"15px", color:"black", margin: "1px"}}>View Profile</p>
                            
                        </a>

                        <a href="/agent/editprofile">
                            <p style={{fontSize:"15px", color:"black", margin: "1px"}}>Edit Profile</p>
                            
                        </a>
                        <a href="" onClick={logout}>
                            <p style={{fontSize:"15px", color:"black", margin: "1px"}}>Logout</p>                            
                        </a>
                        
                    </DivMenu>
                </DIV> 


                <DIVshare className="sub-menu-wrap" id="subMenu" ref={subMenuRefShare}>
                    <button type="button" onClick={toggleMenuShare}>
                    </button>
                    {isLinkCopied && <span style={{borderRadius: "10px", marginLeft: '8px', padding: "13px", backgroundColor: "white", fontSize: "15px", fontStyle: "Roboto"}}>Link Copied <i style={{color: "green"}} className="fas fa-check"></i> </span>}                   
                </DIVshare>

                 <DIVtimer className="sub-menu-wrap" id="subMenu" ref={subMenuRefTimer}>
                      <DivTimer className="sub-menu">
                        <div>
                          <button style={{margin:"5px"}}onClick={handleStartStop} hidden={editMode || isPaused}>
                            {isRunning ? 'Stop' : 'Start'}
                          </button>
                          {!isRunning && (
                            <button style={{margin:"5px"}}onClick={handleReset} hidden={editMode || !record}>
                              Reset
                            </button>
                          )}
                          {isRunning && (
                            <button style={{margin:"5px"}}onClick={handlePauseResume} disabled={!isRunning}>
                              {isPaused ? 'Resume' : 'Pause'}
                            </button>
                          )}
                          {isRunning && <p style={{color:"green", margin:"10px"}}>Time Logged: {formatTime(lapsedTime)}</p>}
                          {!isRunning && !editMode && (
                            <>
                            <button style={{margin:"5px"}}onClick={handleEdit} disabled={!record}>
                                Edit
                              </button>
                              <p style={{color:"gray", margin:"10px"}}>Logged Time: {formatTime(overallTime)}</p>
                              
                            </>
                          )}
                          {editMode && (
                            <>
                              <p style={{margin:"10px"}}>Edit Logged Time:</p>
                              <div style={{margin:"10px"}}>
                                <label style={{marginLeft:"15px"}}>Hours: </label>
                                <input style={{border:"3px", borderStyle:"inset"}}
                                  type="number"
                                  value={editHours}
                                  onChange={(e) => setEditHours(Number(e.target.value))}
                                  min="0"
                                  step="1"
                                />
                              </div>
                              <div style={{margin:"10px"}}>
                              <label style={{marginLeft:"2px"}}>Minutes: </label>
                                <input style={{border:"3px", borderStyle:"inset"}}
                                  type="number"
                                  value={editMinutes}
                                  onChange={(e) => setEditMinutes(Number(e.target.value))}
                                  min="0"
                                  step="1"
                                />
                              </div>
                              <div style={{margin:"10px"}}>
                                <label>Seconds: </label>
                                <input style={{border:"3px", borderStyle:"inset"}}
                                  type="number"
                                  value={editSeconds}
                                  onChange={(e) => setEditSeconds(Number(e.target.value))}
                                  min="0"
                                  step="1"
                                />
                              </div>
                              <button style={{color:"green", margin:"10px"}} onClick={handleEdit}>Save</button>
                              <button style={{color:"red",}} onClick={handleCancelEdit}>Cancel</button>
                            </>
                          )}
                     
                           {!isRunning && (
                            <input style={{border:"2px", borderStyle:"inset", margin:"10px", borderColor:"gray"}}
                              type="text"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              hidden={isRunning || editMode}
                              placeholder="Enter task description"
                            />
                          )}
                          {record && (
                            <div style={{margin:"10px"}}>
                              <h3>Recorded Date and Time:</h3>                     
                              <p>Date: {record.date}</p>
                              <p>Time: {record.time}</p>
                            </div>
                          )}
                          {logs.length > 0 && (
                            <div>
                              <h3>Action Logs:</h3>
                              <ul>
                                {logs.map((log, index) => (
                                  <li key={index}>
                                    <span style={{color:"red"}}>{log.date} - {log.time}: </span>
                                    <span style={{color:"gray",}}>{log.action} - </span>
                                    <span style={{color:"blue",}}>{log.description}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </DivTimer>   
                </DIVtimer> 
                

                <DIVnotif className="sub-menu-wrap" id="subMenu" ref={subMenuRefNotif}>
                    <DivNotif className="sub-menu">
                    <div style={{marginTop: "10px"}}>
                      <MarkAllAsReadButton style={{marginRight:"10px"}} onClick={handleMarkAllAsRead}>Mark All as Read</MarkAllAsReadButton>
                        <Notification text="A new lead has been created" timeAgo="2 mins ago" styles={{ fontSize: '16px', marginTop: "20px",  fontWeight: 'bold', fontStyle: 'italic'  }} />
                        <Notification text="A new lead has been created" timeAgo="59 mins ago" styles={{ fontWeight: 'bold', fontStyle: 'italic'  }} />
                        <Notification text="A new lead has been created" timeAgo="1 hr ago" styles={{ backgroundColor: '' }} />
                        <Notification text="A new lead has been created" timeAgo="2 days ago" />
                        <Notification text="A new lead has been created" timeAgo="5 days ago" />
                        <Notification text="A new lead has been created" timeAgo="1 week ago" styles={{ color: 'purple' }} />
                        <Notification text="A new lead has been created" timeAgo="2 weeks ago" styles={{ fontSize: '16px' }} />
                        <Notification text="A new lead has been created" timeAgo=" About a month ago" styles={{ color: 'red' }} />
                        <Notification text="A new lead has been created" timeAgo=" About a months ago" />
                        <Notification text="A new lead has been created" timeAgo=" About a month ago" styles={{ fontStyle: 'italic', fontWeight: 'bold' }} />
                        <Notification text="A new lead has been created" timeAgo=" About a year ago" />
                        <Notification text="A new lead has been created" timeAgo=" About a year ago" />

                        <div style={{ border: "2px solid black", padding: "1px", display: "flex", justifyContent: "center", width: "50%", margin: "0 auto", height: "35px", borderRadius:"10px" }}>
                            <a href="/admin/notifications" style={{ textDecoration: "none", color: "inherit" }}>
                                VIEW ALL NOTIFICATION
                            </a>
                        </div>

                    </div>

                       </DivNotif>
                </DIVnotif>

                
                    
                
            </Nav>
        </div>
    </div>
    )
};


export default NavMain; 
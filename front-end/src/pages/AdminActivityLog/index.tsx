import { Form, Card, H4, Button, Title, ActivityLogItem } from "./style";
import { useState, useEffect } from "react";
import axios from "axios";

interface ScheduleData {
  client_name: string;
  date: string;
  time: string;
  status: string;
}

export default function AdminActivityLog() {
  const [schedule, setSchedule] = useState<ScheduleData[]>([]);

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const fetchScheduleData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/schedule");
      console.log(response.data); // Check the API response data

      // Sort the schedule data in ascending order based on the date
      const sortedSchedule = response.data.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

      setSchedule(sortedSchedule);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Title>Upcoming Schedule</Title>
      <Form>
        <div style={{ maxHeight: "440px", overflow: "auto" }}>
          <table style={{ width: "90%" }}>
              <tr>
                <th style={{padding:"15px", float:"left", marginLeft:"5px", fontSize:"18px"}}>Details</th>
                <th style={{fontSize:"18px"}}>Status</th>
              </tr>
              {schedule.map((data, index) => (
                <tr key={index}>
                  <ActivityLogItem style={{paddingTop:"20px"}}>
                    <a style={{textDecoration:"none", color:"black"}} href="/admin/schedule"><label style={{ fontWeight: "bold", fontSize: "16px", cursor:"pointer" }}>{data.client_name}</label></a>
                    <p>{data.date}</p>
                    <p>{data.time}</p>
                    <br />
                  </ActivityLogItem>
                  <td style={{textAlign:"center"}}>{data.status}</td>
                </tr>
              ))}
          </table>
        </div>
      </Form>
    </Card>
  );
}

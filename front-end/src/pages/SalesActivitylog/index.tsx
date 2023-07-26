import { Form, Card, H4, Button, Title, ActivityLogItem } from "./style";
import MC_Logo from '../../assets/MC_Logo.svg';
import { LogoImg } from "../SalesActivitylog/style";
import Input from "../../components/Input";
import Logo from "../../assets/list-solid.svg";
import { useState } from "react";
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

interface ScheduleData {
  name: string;
  date: string;
  time: string;
  status: string;
}

export default function SalesActivitylog() {
  const [schedule, setSchedule] = useState<ScheduleData[]>([
    {
      name: "Sonny Boy Eduave",
      date: "May 5, 2023",
      time: "1:00 pm",
      status: "For Demo",
    },
    {
      name: "Tine Comiso",
      date: "May 5, 2023",
      time: "1:00 pm",
      status: "For Demo",
    },
    {
      name: "Dora D Explorer",
      date: "May 5, 2023",
      time: "1:00 pm",
      status: "For Demo",
    }
  ]);

  return (
    <Card style={{marginLeft: "10px"}}>
      <Title>Upcoming Schedule</Title>
      <Form>
        <table>
          <thead>
            <tr>
              <th></th>
              <td style={{padding:"15px", marginLeft: "400px", fontWeight:"bold"}}>Status</td>
            </tr>
          </thead>
          <tbody>
            {schedule.map((data, index) => (
              <tr key={index}>
                <ActivityLogItem>
                  <label style={{fontWeight: "bold", font: "14px"}}>{data.name}</label>
                  <p>{data.date}</p>
                  <p>{data.time}</p>
                  <br/>
                </ActivityLogItem>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Form>
    </Card>
  );
}
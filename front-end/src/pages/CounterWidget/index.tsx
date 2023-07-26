import { WidgetContainer, Card, Counter,Line} from "./styles";
import MC_Logo from '../../assets/MC_Logo.svg';
import Input from "../../components/Input";

import { FormEvent, useState } from "react";
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

export default function CounterWidget() {

  return (
   <WidgetContainer>
      <Card>
        <Counter>20</Counter>
        <Line/>
          <div style={{textAlign: "center"}}>
           <span>Total Leads Registered</span>
          </div>
      </Card>
      <Card>
        <Counter>20</Counter>
        <Line/>
            <div style={{textAlign: "center"}}>
                <p>Total Client</p>
            </div>
      </Card>

      <Card>
        <Counter>20</Counter>
        <Line/>
          <div style={{textAlign: "center"}}>
            <span>Total Project</span>
          </div>
      </Card>

   </WidgetContainer>
 );

}
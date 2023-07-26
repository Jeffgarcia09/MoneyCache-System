import {Form,Header,Card,Line,H4,P,Button,A} from "./style";
import MC_Logo from '../../assets/MC_Logo.svg';
import {LogoImg} from "../Activitylog/style";
import Input from "../../components/Input";
import Logo from "../../assets/list-solid.svg";
import { FormEvent, useState } from "react";
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

export default function Activitylog() {


  return (
      
    
        <Card>

                <div>
                <LogoImg src={Logo} />
                  <Header> Latest Project Activity</Header>
              </div>
              <Line/>
          <Form>
              <div>
                  <h5>3 weeks ago</h5>
                  <H4>XYZ Calling BPO - Task Status</H4>
                  <H4>Changed</H4>
                  <P>Project Name: test1</P>
                  <span>test111 - </span>
                  <Button><A href="">In Progress</A></Button>
              </div>
              <br />

              <div>
                  <h5>3 weeks ago</h5>
                  <H4>XYZ Calling BPO - Task Status</H4>
                  <H4>Changed</H4>
                  <P>Project Name: test1</P>
                  <span>test111 - </span>
                  <Button><A href="">In Progress</A></Button>
              </div>
              <br />

              <div>
                  <h5>3 weeks ago</h5>
                  <H4>XYZ Calling BPO - Task Status</H4>
                  <H4>Changed</H4>
                  <P>Project Name: test1</P>
                  <span>test111 - </span>
                  <Button><A href="">In Progress</A></Button>
              </div>
              <br />
          </Form>
       </Card>


       
 
 );
}

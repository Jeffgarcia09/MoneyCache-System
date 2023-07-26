
import { FormEvent, useState } from "react";
import { BackNext } from "../components/AgentRegButtons/BackNextButton";
import { SubmitButton } from "../components/AgentRegButtons/SubmitButton";
import { ButtonContainer } from "../components/ButtonCont/ButtonContainer";
import Logoimg from "../components/Logo";
import { Container } from "../components/styles/Container.styled";
import { StyledLogo } from "../components/styles/Logo.styled";
import { RegForm1 } from "./AgentRegistration/RegForm1";
import { RegForm2 } from "./AgentRegistration/RegForm2";
import { useMultiForm } from "./useMultiForm";
import { useAuth } from '../hooks/auth';
import axios from "axios";
import moment from "moment";

type FormData = {
  first_name: string
  middle_name: string
  last_name: string
  dateofBirth: string
  gender: string
  email: string
  phone: string
  street: string
  zipcode: string
  city: string
  province: string
  password: string
  images: string
  suffix: string
  // start_date: string
  // date_hired: string
  contract: string
  clearance: string
  
}

const INITIAL_DATA: FormData = {

  first_name:"",
  middle_name:"",
  last_name:"",
  dateofBirth:"",
  gender:"",
  email:"",
  phone:"",
  street:"",
  zipcode:"",
  city:"",
  province:"",
  password:"",
  images:"",
  suffix:"",
  // date_hired:"",
  // start_date:"",
  contract: "",
  clearance:"",

}

function Reg() {

  const { agentregistration } = useAuth();
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields:  Partial<FormData>){
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const {steps, currentStepIndex, step, isFirstStep, isSecondStep, back, next }
   = useMultiForm([ <RegForm1 {...data} updateFields={updateFields} />,
    < RegForm2 {...data} updateFields={updateFields} /> ])

    
    
    async function onSubmit(e: FormEvent) {
      e.preventDefault();
      // if (!data.start_date) {
      //   console.log(data.start_date);
      //   data.start_date = moment().format('YYYY-MM-Do HH:mm:ss');
      // }
      // if (!data.date_hired) {
      //   console.log(data.date_hired);
      //   data.date_hired = moment().format('YYYY-MM-Do HH:mm:ss');
      // }

      if(currentStepIndex === (steps.length - 1)) {
      console.log(data);
      
      await agentregistration(
        
        data.first_name,
        data.middle_name,
        data.last_name,
        data.dateofBirth,
        data.gender,
        data.email,
        data.phone,
        data.street,
        data.zipcode,
        data.city,
        data.province,
        data.password,
        data.images,
        data.suffix,
        // data.start_date,
        // data.date_hired,
        data.contract,
        data.clearance
      );}
      else {
        next();
      }
    }
 
  return (

      <Container>
        
        <form onSubmit={onSubmit}>
        <StyledLogo><Logoimg/></StyledLogo>
        {step}
        <ButtonContainer>
          <BackNext>
            {isSecondStep && <button type="button" onClick={back}></button> || <button style={{ backgroundColor: "lime" }} type="button"></button>}
            {isFirstStep && <button type="submit"></button> || <button style={{ backgroundColor: "lime" }} type="button"></button>}
          </BackNext>
        </ButtonContainer>
        <SubmitButton>
        {!isFirstStep && <button  id="agentregister" type="submit" >Register</button>}
        </SubmitButton>
        </form>
      </Container>

  ) 
}

export default Reg;

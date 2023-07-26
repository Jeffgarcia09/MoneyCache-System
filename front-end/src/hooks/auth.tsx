import { createContext, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
type AuthTypeProps = {
    isLogged: boolean
    profileType: any
    Agentlogin(email: string, password: string, rememberMe: boolean): void
    Adminlogin(email: string, password: string, profile_type: string): void
    logout(): void
    agentregistration(
        
        first_name: string,
        middle_name: string,
        last_name: string,
        dateofBirth: string,
        gender: string,
        email: string,
        phone: string,
        street: string,
        zipcode: string,
        city: string,
        province: string,
        password: string,
        images: string,
        suffix: string,
        // start_date: string,
        // date_hired: string,
        contract: string,
        clearance: string):void
}

type AuthProviderChildren = {
    children: ReactNode
}

const AuthContext = createContext<AuthTypeProps>({} as AuthTypeProps);
export const AuthProvider = ({ children }: AuthProviderChildren) => {
  
    const [isLogged, setIsLogged] = useState<boolean>(() => {
        const loginValid = localStorage.getItem('@minha-carteira:logged')
        return !!loginValid;
    })

    const [profileType, setProfileType] = useState<any>(() => {
      var test = localStorage.getItem('@minha-carteira:profileType')
      if(test){
        return test;  
      }
      
    });
    const navigate = useNavigate();
    const Adminlogin = async (email: string, password: string, profile_type: string) => {

        const res = await axios.post('http://localhost:8000/login', {email,password,profile_type}).then((response) => {
            console.log(response.data);
            localStorage.setItem('@minha-carteira:logged', 'true')
            setIsLogged(true)
          }, err => {
            setIsLogged(false); 
            alert('User and Password do not match')
          });
            
    }

    const Agentlogin = async (email: string, password: string) => {
      try {
        const res = await axios.post('http://localhost:8000/login', { email, password });
        console.log(res.data);
    
        // Assuming the response contains the user's email and profile_type
        const { email: userEmail, profile_type } = res.data;
    
        localStorage.setItem('@minha-carteira:logged', 'true');
        localStorage.setItem('@minha-carteira:email', userEmail);
        localStorage.setItem('@minha-carteira:profileType', profile_type);
        setProfileType(profile_type);
        setIsLogged(true);
      } catch (error) {
        setIsLogged(false);
        alert('User and Password do not match');
      }
    }
    const ProspectsLogin = (email: string, password: string) => {
        if (email === 'user@gmail.com' && password === 'user') {
            localStorage.setItem('@minha-carteira:logged', 'true')
            setIsLogged(true)

        } else {
            alert('User and Password do not match')
        }
    }
    ////agentregistrattion function 
    
    const agentregistration = async (
        
        first_name: string,
        middle_name: string,
        last_name: string,
        dateofBirth: string,
        gender: string,
        email: string,
        phone: string,
        street: string,
        zipcode: string,
        city: string,
        province: string,
        password: string,
        images: string,
        suffix: string,
        // start_date: string,
        // date_hired: string,
        contract: string,
        clearance: string
      ) => {
        try {
          const res = await axios.post(
            "http://localhost:8000/register/agent",
            {
              
              first_name,
              middle_name,
              last_name,
              dateofBirth,
              gender,
              email,
              phone,
              street,
              zipcode,
              city,
              province,
              password,
              images,
              suffix,
              // start_date,
              // date_hired,
              contract,
              clearance,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          const confirmed = window.confirm("Agent registration success, check email for admin approval");
          if (confirmed) {
            // code to execute if user confirms the modal
            window.location.href = "/agentslogin";
          }
        } catch (err) {
          console.error(err);
          alert("An error occurred while submitting the form.");
        }
      };

      ////end of agentregistrattion function 

    const logout = () => {
        
        let type = localStorage.getItem("@minha-carteira:profileType");
        if(type === "administrators"){
          navigate("/adminlogin");
        }else{
          navigate("/agentslogin");
        }
        
        localStorage.removeItem('@minha-carteira:logged')
        localStorage.removeItem('@minha-carteira:profileType')
        localStorage.removeItem('@minha-carteira:email')
    }

    return (
        <AuthContext.Provider value={{ Agentlogin,isLogged, Adminlogin, logout,agentregistration, profileType }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}
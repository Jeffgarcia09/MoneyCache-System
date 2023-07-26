import Logo from '../assets/Logo.png';
import { StyledLogo } from './styles/Logo.styled';

 const Logoimg = () => {

    return(
      <StyledLogo>
         <img src={Logo} alt="Logo Applications"></img>
         </StyledLogo>

    )
    }
    
    
    export default Logoimg;

import { Container, HeaderTitle, ContainHeader, FORM } from "./styles";

function ViewProfile(){
    return(
    <Container>
        <HeaderTitle>
                <ContainHeader>Profile</ContainHeader>
        </HeaderTitle>
        <FORM>
            <div>
               <h3>Agent Information</h3> 
            </div>
            
        </FORM>
    </Container>
    )
}
export default ViewProfile;
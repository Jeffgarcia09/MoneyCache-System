import { Logs } from "./Logs";
import { Card, CardContent, Container, ContentContainer, ContentContainer2, LogContainer } from "./style";
export default function Createlogs(){
    return (
        <Container>
            <LogContainer>
            
            <h1>
            <i className="fa-solid fa-bars"></i>
            Update</h1>
            <hr style={{border: "1px solid gray"}}/>
            <Card>  
                <CardContent>
                    <ContentContainer>
                        <i className="fas fa-user-alt"></i>
                        <ContentContainer2>
                        <Logs name={'Keith Estoya'} idNum={'2019301760'}
                              dateUpdated={'March 8, 2023'}>
                        </Logs>
                        </ContentContainer2>
                    </ContentContainer>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <ContentContainer>
                        <i className="fas fa-user-alt"></i>
                        <ContentContainer2>
                        <Logs name={'Janndhelle Marth Zulueta'} idNum={'2019666666'} 
                              dateUpdated={'March 8, 2023'}>
                        </Logs>
                        </ContentContainer2>
                    </ContentContainer>
                </CardContent>
            </Card>
            <Card>  
                <CardContent>
                    <ContentContainer>
                        <i className="fas fa-user-alt"></i>
                        <ContentContainer2>
                        <Logs name={'Jessanto Baranggan'} idNum={'2019300453'}
                              dateUpdated={'March 8, 2023'}>
                        </Logs>
                        </ContentContainer2>
                    </ContentContainer>
                </CardContent>
            </Card>
            
            </LogContainer>
        </Container>
    )
}
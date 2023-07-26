import { Card, Container, ContentContainer, Forms, Header, Label, Section, Title, ProfilePicture, Subtitle, UploadButton, Headercont } from "./styles"

export default function Testingtest() {
    
  return (
    <Container>
        <Headercont>
      <Header>Profile</Header>
      </Headercont>
      <ContentContainer>
        <Card style={{ textAlign: "Center" }}>
          <div>
            <h3>Jessanto Baranggan</h3>
          </div>
          <div>
            <h4>@jessyJ</h4>
          </div>
          <div>
            <ProfilePicture src="../../src/assets/adminprofile.jpg" alt="Profile Picture" />
          </div>
          
          <div>
            <Subtitle style={{ marginTop:"20px" }}>Member since mm/dd/yyyy</Subtitle>
          </div>
        </Card>
        <Card>
          <Title>User Info</Title>
          <Forms style={{ height: "340px" }}>
            <Section>
              <Label style={{ textAlign: "left"}}>Full Name</Label>
              <div>
                <input readOnly style={{ width: "300px" }} type="text"></input>
              </div>

              <Label>Password</Label>
              <div>
                <input readOnly style={{ width: "300px" }} type="password"></input>
              </div>

              <Label>Email</Label>
              <div>
                <input readOnly style={{ width: "300px" }} type="email"></input>
              </div>
            </Section>
            <Section>
              <Label>Phone Number</Label>
              <div>
                <input readOnly style={{ width: "300px" }} type="number"></input>
              </div>

              <Label>Address</Label>
              <div>
                <input readOnly style={{ width: "300px" }} type="text"></input>
              </div>
            </Section>
          </Forms>
        </Card>
      </ContentContainer>
    </Container>
  );
}
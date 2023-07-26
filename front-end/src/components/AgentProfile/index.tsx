import { Card, Container, ContentContainer, Forms, Header, Label, Section, Title, ProfilePicture, Subtitle, UploadButton, Headercont } from "./styles"
export default function AgentProfile() {
  const membershipStartDate = '06/07/2023'; // Replace this with the actual membership start date

  return (
    <Container>
      <Headercont>
        <Header style={{ color: 'white' }}>Profile</Header>
      </Headercont>
      <ContentContainer>
        <Card style={{ textAlign: 'center' }}>
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
        <Subtitle style={{ marginTop: '20px', marginLeft: '-70px' }}>
          Member since {membershipStartDate}
        </Subtitle>
      </div>
      
        </Card>
        <Card>
          <Title>User Info</Title>
          <Forms style={{ height: "440px" }}>
            <Section>
              <Label style={{ textAlign: "left"}}>Full Name</Label>
              <div>
                <input style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '29px' }} type="text"></input>
              </div>

              <Label>Email Address</Label>
              <div>
                <input style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '29px' }} type="email"></input>
              </div>

              <Label>Location Coverage</Label>
              <div>
                <input style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '29px' }} type="text"></input>
              </div>
              {/* <Label>Government ID</Label>
              <div>
                <input style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '135px' }} type="file" accept="image/*"></input>
              </div> */}
            </Section>
            <Section>
              <Label>Phone Number</Label>
              <div>
                <input style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '29px' }} type="number"></input>
              </div>

              <Label>Address</Label>
              <div>
              <input style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '29px' }} type="text"></input>
              </div>

              <Label>Zip Code</Label>
              <div>
              <input
                style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '30px' }}
                type="text"
                id="zipCode"
              />
              </div>
              <br></br>
              {/* <Label>Start Date</Label>
              <div>
              <input
                style={{ width: '300px', border: '1px solid #181717', borderRadius: '4px', height: '30px' }}
                type="date"
                id="dateHired"
              />
              </div> */}
            </Section>
          </Forms>
        </Card>
      </ContentContainer>
    </Container>
  );
}
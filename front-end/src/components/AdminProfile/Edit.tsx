import React, { useState } from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  Container,
  ContentContainer,
  Forms,
  Header,
  Label,
  Section,
  Title,
  Subtitle,
  UploadButton,
  Headercont,
  ColumnCont,
  ProfilePictureContainer,
  ProfilePicture,
  EditProfilePicture,
  SaveButton,
} from './styles';

export default function AdminEditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [barangay, setBarangay] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Add your file upload logic here
    // You can use libraries like axios or fetch to upload the file to a server
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can use the values stored in the state variables
    console.log('First Name:', firstName);
    console.log('Middle Name:', middleName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Barangay:', barangay);
    console.log('City:', city);
    console.log('Province:', province);
    console.log('Zip Code:', zipCode);
    // Perform any other actions with the form data

    // Include the selectedFile in your form submission or file upload logic
    if (selectedFile) {
      // Perform the file upload using the selectedFile
      console.log('Selected File:', selectedFile);
    }
  };

  return (
    <Container>
      <Headercont>
        <Header style={{color:"white"}}>Edit Profile</Header>
      </Headercont>
      <ContentContainer>
        <ColumnCont>
          <Title>Admin Information</Title>
          <Forms style={{ height: '340px' }}>
            <Section>
              <Label style={{ textAlign: 'left' }}>
                <span style={{ color: 'red' }}>*</span>First Name
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <Label>Middle Name</Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>

              <Label>
                <span style={{ color: 'red' }}>*</span>Last Name
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <Label>
                <span style={{ color: 'red' }}>*</span>Phone Number
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </Section>
            <Section>
              <Label>
                <span style={{ color: 'red' }}>*</span>Barangay
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={barangay}
                  onChange={(e) => setBarangay(e.target.value)}
                />
              </div>

              <Label>
                <span style={{ color: 'red' }}>*</span>City
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <Label>
                <span style={{ color: 'red' }}>*</span>Province
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>

              <Label>
                <span style={{ color: 'red' }}>*</span>Zip Code
              </Label>
              <div>
                <input
                  style={{ width: '300px' }}
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>


            </Section>
          </Forms>
        </ColumnCont>
        <Subtitle>
          <span style={{ color: 'red' }}>*</span>Photo
        </Subtitle>
        <ProfilePictureContainer>
          <EditProfilePicture
            src={
              selectedFile ? URL.createObjectURL(selectedFile) : '../../src/assets/profile.jpg'
            }
            alt="Profile Picture"
          />
          <UploadButton htmlFor="file-input">
            <FontAwesomeIcon icon={faCloudUploadAlt} />
            <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          maxSize={5242880} // Limit the file size to 5MB
        />
          </UploadButton>
          <SaveButton type="submit" onClick={handleSubmit}>
            Save
          </SaveButton>
        </ProfilePictureContainer>
      </ContentContainer>
    </Container>
  );
}

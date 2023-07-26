import React, { useState } from "react";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    EditProfilePicture,
    SaveButton,
    CloseButton,
} from "./styles";

export default function AgentEditProfile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [barangay, setBarangay] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [locationCoverage, setLocationCoverage] = useState("");

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <Container>
            <Headercont>
                <Header style={{ color: "white" }}>Edit Profile</Header>
            </Headercont>
            <ContentContainer>
                <ColumnCont>
                    <Title>Agent Information</Title>
                    <Forms style={{ height: "470px" }}>
                        <Section>
                            <Label style={{ textAlign: "left" }}>
                                <span style={{ color: "red" }}>*</span>First
                                Name
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>

                            <Label>Middle Name</Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={middleName}
                                    onChange={(e) =>
                                        setMiddleName(e.target.value)
                                    }
                                />
                            </div>

                            <Label>
                                <span style={{ color: "red" }}>*</span>Last Name
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>

                            <Label>
                                <span style={{ color: "red" }}>*</span>Phone
                                Number
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                />
                            </div>

                            <Label>
                                <span style={{ color: "red" }}>*</span>Location
                                Coverage
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px", height: "90px" }}
                                    type="text"
                                    value={locationCoverage}
                                    onChange={(e) =>
                                        setLocationCoverage(e.target.value)
                                    }
                                />
                            </div>
                        </Section>
                        <Section>
                            <Label>
                                <span style={{ color: "red" }}>*</span>Barangay
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={barangay}
                                    onChange={(e) =>
                                        setBarangay(e.target.value)
                                    }
                                />
                            </div>

                            <Label>
                                <span style={{ color: "red" }}>*</span>City
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <Label>
                                <span style={{ color: "red" }}>*</span>Province
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="text"
                                    value={province}
                                    onChange={(e) =>
                                        setProvince(e.target.value)
                                    }
                                />
                            </div>

                            <Label>
                                <span style={{ color: "red" }}>*</span>Zip Code
                            </Label>
                            <div>
                                <input
                                    style={{ width: "300px" }}
                                    type="number"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </div>
                        </Section>
                    </Forms>
                </ColumnCont>
                <Subtitle>
                    <span style={{ color: "red" }}>*</span>Photo
                </Subtitle>
                <ProfilePictureContainer>
                    <EditProfilePicture
                        src={
                            selectedFile
                                ? URL.createObjectURL(selectedFile)
                                : "../../src/assets/profile.jpg"
                        }
                        alt="Profile Picture"
                    />
                    <UploadButton>
                        <FontAwesomeIcon icon={faCloudUploadAlt} />
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                    </UploadButton>
                    <div style={{ display: "flex", marginTop: "1rem" }}>
                        <SaveButton type="submit">Save</SaveButton>
                        <CloseButton type="button">Close</CloseButton>
                    </div>
                </ProfilePictureContainer>
            </ContentContainer>
        </Container>
    );
}

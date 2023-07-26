import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color:#5dafdd;
  margin-left: -10px;
  margin-top: -20px;
  padding-top: 20px;
`
export const ContentContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding-top: 20px;
  padding-left: 20px;
  margin-left: 38px;
  margin-top: 15px;
  border-radius: 10px;
  padding-bottom: 20px;
  background-color:#6abd45;
  display: flex;
  flex-direction: row;
`
export const Headercont = styled.div`
    border-bottom: 1px solid black;
`
export const Header = styled.h1`
margin-left: 42px;
width: fit-content;
height: 50px;
text-align: center;
padding: 10px;
background-color: #1669b2;
`
export const Card = styled.div`
    padding-left: 26px;
    width: auto;
    height: fit-content;
    padding-right: 20px;
    padding-top: 27px;
    border-radius: 10px;
    background-color: white;
    margin-right: 20px;
    margin-bottom: 25px;
    padding: 15px;
`
export const Title = styled.h3`

`
export const Label = styled.label`
    margin-bottom: 8px;
    margin-left: 10px;
`
export const Forms = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;

    input[type="text"], input[type="number"], input[type="password"], input[type="email"] {
        width: 100%;
        padding: 5px 0px;
        margin-bottom: 20px;
        font-size: 14px;
        border-radius: 5px;
        border:1px solid black;
        box-shadow: 0px 0px 1px ;
        background-color: white;
        text-indent: 10px;
    } 
`
export const Subtitle = styled.p`
margin-right: -70px;
`
export const Section = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const UploadButton = styled.button`
    display: inline-block;
    padding: 8px;
    border-radius: 5px;
    background-color: #333db7;
    color: #fff;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 10px;
    width: 70%;
    border-radius: 5px;
    color: white;

`
export const HiddenInput = styled.input`
  /* Hide the input element */
  display: none;
`
export const ColumnCont = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  text-align: left;
`
export const EditProfilePicture = styled.img`
  width: 178px;
  height: 193px;
  object-fit: cover;
  border-radius: 5px;
`
export const SaveButton = styled.button`
    width: 66.59px;
    height: 33.28px;
    border-radius: 5px;
    background-color: #5dafdd;
    margin-top: 50px;
    margin-right: 50px;
`
export const CloseButton = styled.button`
    width: 66.59px;
    height: 33.28px;
    border-radius: 5px;
    background-color: darkgray;
    margin-top: 50px;
    margin-right: 50px;
`
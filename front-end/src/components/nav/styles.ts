import styled from "styled-components";
import React from "react";


export const Nav  = styled.nav`
background:white;
padding: 2px 10%;
display: flex;
align-items:center;
justify-content:space-between;
position: absolute;
`;

export const DivMenu = styled.div`
  hr {
    border: 0;
    height: 1px;
    width: 100%;
    background: #ccc;
    margin: 15px 0 10px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #525252;
    margin: 2px 0;
    padding: 6px;
    border-radius: 10px;
    transition: background-color 0.3s;

    img {
      width: 35px;
      background: #e5e5e5;
      border-radius: 50%;
      padding: 8px;
      margin-right: 10px;
    }

    p {
      width: 100%;
      font-size: 13px;
      font-family: 'Poppins', sans-serif;
      &:hover {
        font-weight: 600;
        transition: transform 0.3s;
      }
    }

    &:hover {
      background-color: #52ABF9; /* Set the hover background color */
    }
  }

  background: #fff;
  padding: 10px;
  margin-left: 0px;
  border-radius: 10px;

`;

export const DIV = styled.div`
  &.sub-menu-wrap {
    position: absolute;
    top: 105%;
    right: 13%;
    width: 280px;
    overflow: hidden;
    max-height: 0px;
  }

  &.open-menu {
    max-height: 400px;
  }
`;


export const DIVshare  = styled.div`

&.sub-menu-wrap{
    position: absolute;
    top:95%;
    right: 4%;
    width: 180px;
    overflow: hidden;
    max-height: 0px;
}

&.open-menu {
    max-height: 100%;
}
`;

export const DIVnotif = styled.div`
  &.sub-menu-wrap {
    position: absolute;
    top: 95%;
    right: 3%;
    width: 500px;
    overflow: auto;
    max-height: 0px;
    background-Color: white;
  }

  &.open-menu {
    max-height: 500px;

  }
`;
export const DivNotif = styled.div`
  hr {
    border: 0;
    height: 1px;
    width: 100%;
    background: #ccc;
    margin: 0px 0 10px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #525252;
    margin: 12px 0;

    img {
      width: 35px;
      background: #e5e5e5;
      border-radius: 50%;
      padding: 8px;
      margin-right: 15px;
    }

    p {
      width: 100%;
      font-size: 13px;
      font-family: 'Poppins', sans-serif;
      &:hover {
        font-weight: 600;
        transition: transform 0.3s;
      }
    }
  }

  &.sub-menu {
    background: #fff;
    padding: 20px; /* Increase the padding to make the box bigger */
    margin-Left: 0px; /* Increase the margin to make the box bigger */
    border-radius: 10px;
  }
`;

export const NotificationContainer = styled.div`
  background: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #52ABF9;
  }
`;

export const NotificationText = styled.p`
  color: black;
`;

export const AgentName = styled.span`
  color: #1A6BB2;
`;

export const TimeAgo = styled.small`
  color: #8C8C8C;
`;

export const MarkAllAsReadButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background: #1A6BB2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


// &.sub-menu-wrap{
//     position: absolute;
//     top:105%;
//     right: 14%;
//     width: 180px;
//     overflow: hidden;
//     max-height: 0px;
// }

// &.open-menu {
//     max-height: 400px;
// }
// `;



export const DIVtimer  = styled.div`

&.sub-menu-wrap {
    position: absolute;
    top: 100%;
    right: 7%;
    width: 350px;
    overflow: auto;
    max-height: 0px;
    background-Color: transparent;
    margin-top: 2px;
  }

  &.open-menu {
    max-height: 350px;

  }
`;

export const DivTimer  = styled.div`

    p {
      width: 100%;
      font-size: 18px;
      font-family: 'Poppins', sans-serif;
    }

  &.sub-menu {
    background: #fff;
    padding: 20px; /* Increase the padding to make the box bigger */
    margin-Left: 0px; /* Increase the margin to make the box bigger */
    border-radius: 15px;
  }
  button{
    background: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #52ABF9;
    font-weight: 600;
        transition: transform 0.3s;
  }
}
  
`;



export const InfoProfile  = styled.div`
    display: flex;
    align-items:center;   
   
   h2{
        font-Family:'Poppins', sans-serif;
        font-size:16px;
    }

    img{
        border-radius:50%;
        width: 50px;
        margin-right:15px;

    }

 

`;

export const UL  = styled.ul`
width:9%;
display: flex;

    li{
        margin:0px 3px auto;
        list-style:none;
        background-color: white;

        button{
            background: transparent; /* Blue background */
            border: none; /* Remove borders */
            color: white; /* White text */
            padding: 12px 16px; /* Some padding */
            font-size: 12px; /* Set a font size */
            
            
            

            &:hover {
                    background-color: rgb(132, 197, 41);
                    border-radius:10px ;
        }


    }
  }
`;

export const Search  = styled.div`
border: 1px solid black;
border-radius: 10px;
height: 40px;


`;

export const NavBar  = styled.div`

position: absolute;
  top:50%;
  left: 0;
  margin-left:15px;
  transform: translateY(-50%);

&.Navbar{
    overflow: hidden;
    max-height: 400px;
}
    button{
        
        background-color: DodgerBlue; /* Blue background */
        border: none; /* Remove borders */
        color: white; /* White text */
        padding: 12px 16px; /* Some padding */
        font-size: 14px; /* Set a font size */
        cursor: pointer;
        border-radius:10px;
        

        i{
            font-size: 18px;
            
        }

        &:hover {
                    background-color: RoyalBlue;
                    border-radius:10px ;
        }   
    }
`;

export const DropdownContent = styled.div`
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    position: absolute;
    z-index: 1;
    top: 40px; /* Adjust the top position as per your requirement */
    right: -10px; /* Adjust the right position as per your requirement */

    /* Rest of the styles */
    `;

    

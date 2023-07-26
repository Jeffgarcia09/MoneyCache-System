import styled from "styled-components";

export const SideBar = styled.div`

grid-area: AS;
position: fixed;
top:0;
left:0;
height: 100%;
width: 230px;
background: #fff;


div.logo-details{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    color:black;
    margin-left: 20px ;
    margin-top: 10px;

}

img{
    
    width: 170px;
    height: 100px;
    margin-left:1px;
    // transform: rotate(270deg);
    
}
span{
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    font-Family:'Poppins', sans-serif;
   
}

a{
    width: 25px;
    height: 25px;
    margin-left:15px;
    cursor:pointer;         
}

// &.sidebar{
//     overflow: hidden;
//     max-height: 0;
// }

// &.open-menu-sidebar {
//     max-height: 100%;
// }

`;

export const LogOut = styled.img`

`;

export const Sidebuttons = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;

    span {
      font-weight: 500;
      font-family: 'Poppins', sans-serif;

      &:hover {
        font-weight: 600;
        color: #47b5ff;
        transition: transform 0.5s;
      }
    }
  }

  li {
    margin-top: 10px;

    &:after {
      content: "";
      display: block;
      height: 1px;
      background: #ccc;
      margin-top: 8px;
    }
  }
};
`;

export const Donut = styled.div`

position: absolute;
  top:5.1%;
  left: 0;
  margin-left:20px;
  transform: translateY(-50%);
  padding-bottom: 10px;

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
    
        

        i{
            font-size: 18px;
            
        }

        &:hover {
                    background-color: RoyalBlue;
                    border-radius:10px ;
        }   
    }

`;

// export const Close = styled.div`
//   position: absolute;
//   top:90%;
//   left: 0;
//   margin-left:130px;
//   padding: 20px;
//   font-size:30px;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

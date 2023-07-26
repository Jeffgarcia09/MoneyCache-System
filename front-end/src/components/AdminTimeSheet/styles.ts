import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`

export const Header = styled.div`
padding: 20px;
`
export const Button = styled.button`
  background-color:#84C529;
  font-size: 15px;
  padding:10px 18px;
  margin-left: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  // weight: "156";
  // height: "46"
`;

export const A = styled.a`
  background-color:#84C529;
  color:white;
  text-decoration: none;
`;

export const Form = styled.div`
    background-color:White;
    width:100%;
`;

export const Table = styled.table`

width: 100%;
padding: 10px;
text-align: center;
font-size: 15px;
    thead{
        
        
        tr{
            
            th{
                font-weight: bold;
                padding: 8px;
            }
        }

    }
    tbody{

        tr{
            
            th{
                
            }
        }
    }
`;

export const WidgetContainer = styled.div`
  display: pull-left;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 200px ;
  
`;

export const Line = styled.hr`
  border:1px solid white;
  margin:7px;
`;

export const InCard = styled.div`
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 0 0 0 1;
  border-width:1px;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float:left;
  width: 265px;
  height: 144px;
  margin-left: 30px;

  /* :hover{
    transform: rotateX(7deg) translateY(-6%);
    transition: ease-in-out;
  } */

  :hover {
    transform: scale(1.1);
    transition: 200ms ease-in-out;
  }
`;

export const Counter = styled.h1`
  font-size: 25px;
  margin-bottom:10px;
  text-align: center;
  font-weight: normal;
`;
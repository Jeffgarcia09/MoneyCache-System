import { Container,Form,But,BTN,LI,HR,LogoImg, Option, Select,Table,LINE,Label,Input,Switch} from "./styles";
import Logo from '../../assets/filter-solid.svg';




function DataTables() {
    
      return (
  
        <Container>
                <header>

                

                    <But><a style={{textDecoration:"None"}} href="/Contacts"> Contacts</a></But>
            <a href="/link" target="_blank"><LogoImg src={Logo} alt="Logo Application"  /></a>

                    
                <div style={{border:"2px",
                                 width:"940px",
                                 height:"100px",
                                 borderTopLeftRadius:"5px",
                                 borderTopRightRadius:"5px",
                                 backgroundColor:"white",
                                 marginBottom:"2px"}}>
                <h3 style={{marginLeft:"15px", paddingTop:"15px"}}>Customer Summary</h3>

                    <ul style={{paddingLeft:"70px"}}>
                        <LI> 13 Total Customer</LI>
                        <LI><HR/></LI>
                        <LI style={{color:"#16FF00"}}>6 Active Customers</LI>
                        <LI><HR/></LI>
                        <LI style={{color:"#FF1E1E"}}>7 Inactive Customers</LI>
                        <LI><HR/></LI>
                        <LI style={{color:"#0077b6"}}>14 Active Contacts</LI>
                        
                    </ul>

                    
                </div>
                </header>
    <Form>

             <div>
            <input type="checkbox" id="" name="fname"/>
            <label>  Exclude Inactive Customers</label>
            </div>
            <br /><br />
            
            <div role="group" style={{display: "inline-block"}}>
                    <Select name="" id="">
                        <Option value="volvo">25</Option>
                        <Option value="saab">21</Option>
                        <Option value="opel">56</Option>
                        <Option value="audi">7</Option>
                    </Select>
                    <BTN style={{marginLeft:"5px"}}>Export</BTN>
                        <BTN>Bulk Actions</BTN>
                        <BTN>Icon</BTN>
                        {/* <BTN><LogoImg  src={Logo} alt="Logo Application"  /></BTN> */}
            </div>
            <div style={{float:"right", }}>
                        <input type="text" style={{border:"1px solid", padding:"6px", borderRadius:"5px"}} placeholder="Search.." name="search2"/>
                        <But type="submit">Submit</But>
                    </div>
        
            <br /><br />
     <body>
            <Table>
                <div><LINE/></div>
            
                <tr>
                    
                    <input style={{margin:"10px 10px"}} type="checkbox" />
                    <th>#</th>
                    <th>Company</th>
                    <th>Primary Contact</th>
                    <th>Primary Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Groups</th>
                    <th>Date Created</th>
                    <th>Type</th>
                    <th>Capacity</th>
                    
                </tr>

                <div><LINE/></div>
                <br />
                <tr>
                    <input style={{margin:"10px 10px"}} type="checkbox" />
                    <td>9234</td>
                    <td>Algsrtrr</td>
                    <td>Mohamed Abdefgerr</td>
                    <td>elwahaab@gmail.com</td>
                    <td>01092002266</td>
                    <td>
                    <Label>
                        <Input type="checkbox"/>
                        <Switch />
                    </Label>

                    
                    </td>
                    <td>Client</td>
                    <td>28/11/2022 1:10 PM</td>
                    <td>Linus</td>
                    <td>vbfghcfgn</td>
                </tr>
                <br />
                <div><LINE/></div>
                <br />
                <tr>
                <input style={{margin:"10px 10px"}} type="checkbox" />
                    <td>2327</td>
                    <td>Tobias</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                </tr>
                <br />
                <div><LINE/></div>
                <br />
                <tr>
                <input style={{margin:"10px 10px"}} type="checkbox" />
                    <td>3442</td>
                    <td>Tobias</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                </tr>
                <br />
                <div><LINE/></div>
                <br />
                <tr>
                <input style={{margin:"10px 10px"}} type="checkbox" />
                    <td>5531</td>
                    <td>Tobias</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                    <td>Linus</td>
                </tr>
                <br />
        </Table>
        <div>
             <span style={{fontSize:"15px",color:"#362FD9"}}>Showing 1 to 6 of 6 entries</span>
             <div style={{float:"right"}}>
                 <a style={{textDecoration:"None"}} href="">Previous</a>
                 <span style={{margin:"10px", border:"1px", color:"white", padding:"5px", borderRadius:"20px", backgroundColor:"#362FD9"}}>1</span>
                 <a style={{textDecoration:"None"}} href="">Next</a>
            </div>
             
        </div>

    
     </body>
    </Form>
    
</Container>
);

}

export default DataTables;


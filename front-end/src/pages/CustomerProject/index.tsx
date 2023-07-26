import { Form, Header, Card, WidgetCard, LN, Counter, WidgetContainer, Option, Select, BTN, Table } from "./style";


export default function CustomerProject() {
  return (
    <>
  <Card>
        <br />
        <Header> Projects</Header>
        <br />
        <LN />
        <WidgetContainer>
     <WidgetCard>
       <span style={{ color:"#333333" }}>Not Started</span>

       <div>
        <br />
       <Counter style={{ color:"#007DB6" }}>0</Counter>
       </div>
     </WidgetCard>
     <WidgetCard>
     <p style={{ color:"#007DB6" }}>In Progress</p>   

         <div>
          <br />
      <Counter style={{ color:"#007DB6" }}>4</Counter>
        </div>
     </WidgetCard>
     <WidgetCard>
     <span style={{ color:"#FFA800" }}>Inactive Customers</span>

       <div>
       <Counter style={{ color:"#007DB6" }}>9</Counter>
       </div>
     </WidgetCard>
     <WidgetCard>
     <span style={{ color:"#8C8C8C" }}>Active Contacts</span>

       <div>
        <br />
       <Counter style={{ color:"#007DB6" }}>14</Counter>
       </div> 
     </WidgetCard>
     <WidgetCard>
     <span style={{ color:"#04D000" }}>Inactive Contacts</span> 
 
       <div>
       <Counter style={{ color:"#007DB6" }}>21</Counter>
       </div>
     </WidgetCard>
   </WidgetContainer>

        <Form>
          <div role="group" style={{ display: "inline-block" }}>
            <Select name="" id="">
              <Option value="volvo">25</Option>
              <Option value="saab">21</Option>
              <Option value="opel">56</Option>
              <Option value="audi">7</Option>
            </Select>
            <BTN style={{ marginLeft: "5px" }}>Export</BTN>    

            <input type="text" style={{border:"1px solid", padding:"4px", borderRadius:"4 px", float:"right"}} placeholder="Search.." name="search2"/>
            </div>

            
            <tr>
            <LN style={{ color:"#646464"}}></LN>
                    <Table style={{ fontSize:"14px" }}>
                    <th style={{ fontWeight:"normal" }}>#</th>
                    <th style={{ fontWeight:"normal" }}>Project Name</th>
                    <th style={{ fontWeight:"normal" }}>Tags</th>
                    <th style={{ fontWeight:"normal" }}>Start Date</th>
                    <th style={{ fontWeight:"normal" }}>Deadline</th>
                    <th style={{ fontWeight:"normal" }}>Members</th>
                    <th style={{ fontWeight:"normal" }}>Status</th>
                    </Table>
            <LN style={{ color:"#646464"}}></LN>
                 
                </tr>   
                <br />

                <label> No entries found</label>              
               </Form>
  </Card>
      </>
      );
      }

import {
  Form,
  Header,
  Card,
  LN,
  Option,
  Select,
  BTN,
  NewContactBTN,
  Table,
} from "./style";

export default function CustomerContact() {
  return (
    <>
      <Card>
        <br />
        <Header> Contacts</Header>
        <br />
        <LN />
        <br />

        <Form>
          <NewContactBTN>
            <a style={{backgroundColor: '#1A6BB2', color: '#fff'}} href="/newcontact">
              + New Contacts
            </a>
          </NewContactBTN>
          <br />
          <div role="group" style={{ display: "inline-block" }}>
            <Select name="" id="">
              <Option value="volvo">25</Option>
              <Option value="saab">21</Option>
              <Option value="opel">56</Option>
              <Option value="audi">7</Option>
            </Select>
            <BTN style={{ marginLeft: "5px" }}>Export</BTN>    

            <input
              type="text"
              style={{
                border: "1px solid",
                padding: "4px",
                borderRadius: "4px",
                float: "right",
              }}
              placeholder="Search.."
              name="search2"
            />
          </div>

          <tr>
            <LN style={{ color: "#646464" }}></LN>
            <Table style={{ fontSize: "14px" }}>
              <th style={{ fontWeight: "normal" }}>Full Name</th>
              <th style={{ fontWeight: "normal" }}>Email</th>
              <th style={{ fontWeight: "normal" }}>Position</th>
              <th style={{ fontWeight: "normal" }}>Phone</th>
              <th style={{ fontWeight: "normal" }}>Active</th>
              <th style={{ fontWeight: "normal" }}>Last Login</th>
            </Table>
            <LN style={{ color: "#646464" }}></LN>
          </tr>
          <br />

          <label> No entries found</label>
        </Form>
        <div style={{ float: "right" }}>
          <a style={{ textDecoration: "None" }} href="">
            Previous
          </a>
          <span style={{ margin: "10px", border: "1px", color: "white", padding: "5px", borderRadius: "20px", backgroundColor: "#362FD9" }}>
            1
          </span>
          <a style={{ textDecoration: "None" }} href="">
            Next
          </a>
        </div>
      </Card>
    </>
  );
}
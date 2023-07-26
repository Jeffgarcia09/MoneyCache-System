import { useState, useEffect } from "react";
import axios from "axios";
import { Card, LN, WidgetContainer, Counter, Line, InCard } from "./styles";

export default function AdminAnalytics() {
  const [leadCount, setLeadCount] = useState(0);
  const [qualifiedCount, setQualifiedCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);
  const [notInterestedCount, setNotInteresetedCOunt] = useState(0);
  const [overallTotal, setOverallTotal] = useState(0);

  useEffect(() => {
    setOverallTotal(leadCount + qualifiedCount + closedCount + notInterestedCount);
  }, [leadCount, qualifiedCount, closedCount, notInterestedCount]);

  useEffect(() => {
    getTotalData();
  }, []);

  const getTotalData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admindashboard");
      const [leadCount, qualifiedCount, closedCount, notInterestedCount, totalLeads] = response.data;
      setLeadCount(leadCount);
      setQualifiedCount(qualifiedCount);
      setClosedCount(closedCount);
      setNotInteresetedCOunt(notInterestedCount);
      
      // You can handle the 'agents' and 'schedule' data as needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card style={{ marginTop: "20px", marginLeft: "30px" }}>
        <h2>
          <i className="fas fa-chart-bar"></i> Analytics
        </h2>
        <br />
        <LN style={{ color: "#000000" }} />
        <br />
        <WidgetContainer>
          <InCard style={{ backgroundColor: "rgba(109, 189, 72, 0.5)" }}>
            <Counter>{leadCount}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <span>Total Leads</span>
            </div>
          </InCard>
          <InCard style={{ backgroundColor: "rgba(82, 171, 249, 0.5)" }}>
            <Counter>{qualifiedCount}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <p>Total Qualified Leads</p>
            </div>
          </InCard>
          <InCard style={{ backgroundColor: "rgba(70, 89, 255, 0.5)" }}>
            <Counter>{closedCount}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <span>Total Closed Deals</span>
            </div>
          </InCard>
          <InCard style={{ backgroundColor: "#9A9A9A", marginLeft: "80px", marginTop: "15px" }}>
            <Counter>{notInterestedCount}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <p>Total of Not Interested</p>
            </div>
          </InCard>
          <InCard style={{ backgroundColor: "#FFB2C9", marginTop: "15px" }}>
            <Counter>{overallTotal}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <span>Overall Total</span>
            </div>
          </InCard>
        </WidgetContainer>
        <br />
        <br />
      </Card>
    </>
  );
}

import { useState } from "react";
import { Card, LN, WidgetContainer, Counter, Line, InCard } from "./styles";

export default function SalesAnalytics() {
  const [totalLeads, setTotalLeads] = useState(20);
  const [totalClients, setTotalClients] = useState(20);
  const [totalProspects, setTotalProspects] = useState(20);

  return (
    <>
      <Card style={{marginTop: "20px", marginLeft: "10px"}}>
        <h2> <i className="fas fa-chart-bar"></i>  Analytics </h2>
        <br />
        <LN style={{ color: "#black" }} />
        <br />
        <WidgetContainer>
          <InCard style={{ backgroundColor: "rgba(109, 189, 72, 0.5)" }}>
            <Counter>{totalLeads}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <span>Total Leads</span>
            </div>
          </InCard>
          <InCard style={{ backgroundColor: "rgba(82, 171, 249, 0.5)" }}>
            <Counter>{totalClients}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <p>Total Client</p>
            </div>
          </InCard>
          <InCard style={{ backgroundColor: "rgba(70, 89, 255, 0.5)" }}>
            <Counter>{totalProspects}</Counter>
            <Line />
            <div style={{ textAlign: "center" }}>
              <span>Total Prospect</span>
            </div>
          </InCard>
        </WidgetContainer>
        <br />
        <br />
      </Card>
    </>
  );
}
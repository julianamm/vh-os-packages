import React from "react";
import { storiesOf } from "@storybook/react";
import VHColumn from ".";
import VHCardVisaProcess from "../Cards/VisaProcess";
import { Row } from "../../Grid";

storiesOf("Components|Column", module)

.add("default", () => (
      <VHColumn 
        columnName="Offers Accepeted"
        avgTime={4}
      >
        <Row style={{marginTop: "1rem"}}>
          <VHCardVisaProcess
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
              name="Manuel Barros Reyes"
              companyName="Bank of America"
              positionName="Fron-End Developer"
              cityName="Vancouver, BC"
              time={4}
              comments="6"
              onEvent={(event) => console.log(event)}
              avgTime={4}
          />
        </Row>
        <Row style={{marginTop: "1rem"}}>
          <VHCardVisaProcess
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
              name="Manuel Barros Reyes"
              companyName="Bank of America"
              positionName="Fron-End Developer"
              cityName="Vancouver, BC"
              time={6}
              comments="6"
              invoiced
              onEvent={(event) => console.log(event)}
              avgTime={4}
          />
        </Row>
        <Row style={{marginTop: "1rem"}}>
          <VHCardVisaProcess
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
              name="Manuel Barros Reyes"
              companyName="Bank of America"
              positionName="Fron-End Developer"
              cityName="Vancouver, BC"
              time={3}
              comments="6"
              favorite
              onEvent={(event) => console.log(event)}
              avgTime={4}
          />
        </Row>
        <Row style={{marginTop: "1rem"}}>
          <VHCardVisaProcess
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
              name="Manuel Barros Reyes"
              companyName="Bank of America"
              positionName="Fron-End Developer"
              cityName="Vancouver, BC"
              time={6}
              comments="6"
              onEvent={(event) => console.log(event)}
              avgTime={4}
          />
        </Row>
      </VHColumn>
))  
import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../../Grid/index";
import VHCardHired from ".";

const candidates = [
    {   
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
];

storiesOf("Components|Cards/Hired", module)

.add("default", () => (
  <div style={{ backgroundColor: "#f2f6f9", width: "150px", height: "150px", padding: "24px" }}>
      <VHCardHired 
        name="Mitchell Watson"
        position="Backend Developer"
        country="from Brazil"
        userPhoto="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
        flag="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      />
  </div>
))  

.add("multiply", () => (
    <Row row>
        {candidates.map(candidate => (
            <Row style={{ backgroundColor: "#f2f6f9", width: "150px", height: "150px", padding: "24px", marginRight: "10px" }}>
                <VHCardHired 
                    name={candidate.name}
                    position={candidate.position}
                    country={candidate.country}
                    userPhoto={candidate.userPhoto}
                    flag={candidate.flag}
                />
            </Row>
        ))}
    </Row>
));
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
        flag: "canada",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "usa",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "ireland",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "uk",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "germany",
    },
];

storiesOf("Components|Cards/Hired", module)

.add("default", () => (
  <div style={{ backgroundColor: "#f2f6f9", width: "210px", height: "205px", padding: "24px" }}>
      <VHCardHired 
        name="Mitchell Watson"
        position="Backend Developer"
        country="from Brazil"
        userPhoto="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
        flag="canada"
      />
  </div>
))  

.add("multiply", () => (
    <Row row responsive alignItemsCenter>
        {candidates.map(candidate => (
            <Row marginBottom5 style={{ backgroundColor: "#f2f6f9", width: "210px", height: "205px", padding: "24px", marginRight: "10px" }}>
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

import React from "react";
import { storiesOf } from "@storybook/react";
import VHTimeLine from ".";

const data = {
  totalDays: "21 days",
  items: [
    {
      createdOn: "2019-09-16T13:52:28.657",
      items: [
        {
          columnName: "LMIA Approved",
          userName: "Esther Flores - 2:45 am"
        }
      ]
    },
    {
      createdOn: "2019-09-22T18:32:11.657",
      items: [
        {
          columnName: "LMIA Approved",
          userName: "Esther Flores - 6:33 pm"
        },
        {
          columnName: "Work Permit Processes",
          userName: "Esther Flores - 8:45 pm"
        }
      ]
    },
    {
      createdOn: "2019-09-24T13:24:28.657",
      items: [
        {
          columnName: "LMIA Approved",
          userName: "Esther Flores - 5:45 am"
        }
      ]
    }
  ]
};

storiesOf("Components|TimeLine", module).add("VHTimeLine", () => (
  <div style={{ width: "250px ", height: "100vh", padding: "24px" }}>
    <VHTimeLine items={data.items} totalDays={data.totalDays} onEvent={(event) => console.log(event)}/>
  </div>
));

import React from "react";
import { storiesOf } from "@storybook/react";
import VHActivity from ".";

const activities = {
  "totalDays": "21 days",
  "days":
    [
      {
        "date": "2019-01-24T17:42:41.587",
        "steps": [
          {
            "step": "LMIA Approved",
            "user": "Esther Flores",
            "time": "11:52pm"
          }
        ]
      },
      {
        "date": "2019-01-09T17:42:41.587",
        "steps": [
          {
            "step": "LMIA Applied",
            "user": "Esther Flores",
            "time": "9:33 pm"
          },
          {
            "step": "Work Permit Processes",
            "user": "Esther Flores",
            "time": "10:30 am"
          }
        ]
      },
      {
        "date": "2019-01-03T17:42:41.587",
        "steps": [
          {
            "step": "Offer Accepted",
            "user": "Esther Flores",
            "time": "5:06 pm"
          }
        ]
      }
    ]
}


storiesOf("Components|Activity", module)
  .add("default", () => (
    <VHActivity activities={activities}
    />
  ))
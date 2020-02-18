import React from "react";
import { storiesOf } from "@storybook/react";
import VHModalVisaPipeline from ".";

storiesOf('Components|Modal Visa Pipeline', module)
  .add('VHModalVisaPipeline', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      <VHModalVisaPipeline onEvent={event => console.log(event)} comments={comments} timeLine={{...data}}/>
    </div>
  ))


const comments = [
  {
      "profileId": "74637373",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
      "fullName": "Anybal Silva",
      "days": "3 days ago",
      "event": "Adding a comment like a boss"
  },
  {
      "profileId": "746373373",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
      "fullName": "João Dias",
      "days": "4 days ago",
      "event": "Fixing bug"
  },
  {
      "profileId": "74613437373",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
      "fullName": "Mário Rodeghiero",
      "days": "5 days ago",
      "event": "Had call with Anastasia. She does not need medicals as she is in Germany."
  }
]


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
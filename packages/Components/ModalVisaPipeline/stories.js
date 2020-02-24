import React from "react";
import { storiesOf } from "@storybook/react";
import VHModalVisaPipeline from ".";

storiesOf('Components|Modal Visa Pipeline', module)
  .add('VHModalVisaPipeline', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      <VHModalVisaPipeline activitiesSession={activitiesSession} assignedSession={assignedSession} commentsSession={commentsSession} onEvent={event => console.log(event)} comments={comments} timeLine={{...timeLineData}} assign={{...assignData}} description={descriptionData.description}/>
    </div>
  ))

const commentsSession = {
  loading: false,
  error: false,
  success: true
}

const assignedSession = {
  loading: false,
  error: false,
  success: true
}

const activitiesSession = {
  loading: false,
  error: false,
  success: true
}

const comments = [
  {
    "createdOn": "4 days",
    "note": "Adding a comment 007",
    "user": {
        "id": 141394.0,
        "name": "Anybal Silva",
        "email": "anybal@vanhack.com",
        "avatar": "https://vanhackblobstorageprod.blob.core.windows.net/img/User/1498bcb6-6bb6-4def-bd1a-8c2414e21330.jpg",
        "isPremium": false
    },
    "id": 9021
}
]


const timeLineData = {
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

const assignData = {
  items: [
    {
      id: 0,
      name: "Carlos",
      email: "carlos@gmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
    },
    {
      id: 1,
      name: "Fabio",
      email: "fabio@gmail.com",
      avatar:
        "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 2,
      name: "Fred",
      email: "fred@gmail.com",
      avatar:
        "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
    },
    {
      id: 3,
      name: "Jose",
      email: "jose@gmail.com",
      avatar:
        "https://randomuser.me/api/portraits/men/29.jpg"
    },
  ]
};

const descriptionData = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
}
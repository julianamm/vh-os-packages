import React from "react";
import { storiesOf } from "@storybook/react";
import VHComfirmationTemplate from ".";


storiesOf("Templates|Announcement", module)

.add("default", () => (
    <VHComfirmationTemplate
        title="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        subTitle="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        description="Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui."
    />
))

.add("with cta", () => (
    <VHComfirmationTemplate
        title="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        subTitle="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        description="Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui."
        cta='Start'
        loading
        onEvent={e => {
            console.log(e)
        }}
    />
))

.add("loading", () => (
    <VHComfirmationTemplate
        title="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        subTitle="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        description="Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui."
        loading='Start'
        cta
        onEvent={e => {
            console.log(e)
        }}
    />
))
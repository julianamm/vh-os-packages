import React from "react";
import { storiesOf } from "@storybook/react";
import VHComfirmationTemplate from ".";


storiesOf("Templates|Confirmation", module)

.add("default", () => (
    <VHComfirmationTemplate
        title="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        description="Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui."
        ctaLabel='Start'
        onEvent={e => {
            console.log(e)
        }}
    />
))

.add("loading", () => (
    <VHComfirmationTemplate
        title="tiutloiasdfkjahs fkjash dfkadf asdfsadjfasdfasdf"
        description="Voluptate magna culpaculpaculpaculpaculpaculpaculpa culpaculpaculpaculpa culpaculpaculpa culpaculpa in dolore ut cupidatat qui sint culpa. Duis cupidatat in aliquip ad reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in. reprehenderit labore anim nulla qui. Duis laborum est ad voluptate veniam exercitation in.reprehenderit labore anim nulla qui."
        ctaLabel='Start'
        loading
        onEvent={e => {
            console.log(e)
        }}
    />
))
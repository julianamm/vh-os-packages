import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHUserPositonExperience from "./index";

const ArrayOfSkills = [
    {label: "JavaScript"},
    {label: "React"},
    {label: "Docker"}
];

const ArrayOfDescriptions = [
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    },
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    },
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    }
]

storiesOf("Components|User Positon Experience", module)
    .add("Types", () => {
        return (<Row>
            <VHUserPositonExperience
                headline="Full Stack Developer"
                period="Oct 2019 - Present . 3 mos"
                skills={ArrayOfSkills}
                description={ArrayOfDescriptions}
            />
            <VHUserPositonExperience
                headline="CTO"
                hideTimeline
                period="Oct 2019 - Present . 3 mos"
                skills={ArrayOfSkills}
                description={ArrayOfDescriptions}
            />
        </Row>);
    });

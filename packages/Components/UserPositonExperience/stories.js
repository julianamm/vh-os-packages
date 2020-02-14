import React from "react";
import { storiesOf } from "@storybook/react";
import { Row, Container } from "../../Grid";
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

const UserPositionExperience = {
    headline: "Full Stack Developer",
    period: "Oct 2019 - Present . 3 mos",
    skills: ArrayOfSkills,
    description: ArrayOfDescriptions
}

const UserPositionExperience2 = {
    headline: "CTO",
    period: "Oct 2019 - Present . 3 mos",
    skills: ArrayOfSkills,
    description: ArrayOfDescriptions
}

const ArrayOfUserExperience = [];
    ArrayOfUserExperience.push(UserPositionExperience)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)
    ArrayOfUserExperience.push(UserPositionExperience2)

storiesOf("Components|User Positon Experience", module)

.add("with Timeline", () => (
    <Container>
        <Row style={{ padding: "24px"}}>
            <VHUserPositonExperience
                headline={UserPositionExperience.headline}
                period={UserPositionExperience.period}
                skills={UserPositionExperience.skills}
                description={UserPositionExperience.description}
            />
        </Row>
    </Container>
    ))  

.add("many Timeline", () => (
    <Container>
        <Row style={{ padding: "24px"}}>
            {ArrayOfUserExperience.map( userPosition => (
                <VHUserPositonExperience
                    {...userPosition}
                />
            ))}
        </Row>
    </Container>
    ))  

.add("without Timeline", () => (
    <Container>
        <Row style={{ padding: "24px"}}>
            <VHUserPositonExperience
                headline="CTO"
                hideTimeline
                period="Oct 2019 - Present . 3 mos"
                skills={ArrayOfSkills}
                description={ArrayOfDescriptions}
            />
        </Row>
    </Container>
    ))  
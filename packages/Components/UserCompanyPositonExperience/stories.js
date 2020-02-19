import React from "react";
import { storiesOf } from "@storybook/react";
import { Row, Container } from "../../Grid";
import VHUserCompanyExperience from ".";

const company = {
    title: 'Google',
    rightTitle: '2006 / 2007',
    description: "Education - Startup - Belo Horizonte - Brazil"
}

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

storiesOf("Components|Company User Positon Experience", module)

.add("default", () => (
    <Container md>
        <Row marginBottom={15}>
            <VHUserCompanyExperience
                {...company}
                userPositions={ArrayOfUserExperience}
            />
        </Row>
    </Container>
    ))

import React from "react";
import { storiesOf } from "@storybook/react";
import VHUserCompanyExperienceSection from ".";


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

    company.userPositions = ArrayOfUserExperience

const userExperience = [company, company]

storiesOf("Sections|User Company Experience", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHUserCompanyExperienceSection
                yearsOfExperience={"- 6yrs 3 mos"}
                userExperience={userExperience}
                onEvent={e => console.log(e)}
            />
        </div>
    ));
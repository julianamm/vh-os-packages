import React from "react";
import { storiesOf } from "@storybook/react";
import VHUserCompanyExperienceSection from ".";

const experience = {
    "experiences": [
        {
            "workExperiences": [
                {
                    "companyName": "new companynew company",
                    "countryId": 661882,
                    "country": "Åland",
                    "companySize": 1,
                    "companySizeStr": "Startup",
                    "industry": null,
                    "industryId": 3,
                    "positionId": 7,
                    "position": "UI/UX Designer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-12T00:00:00",
                    "endDate": "2020-03-27T00:00:00",
                    "description": "new description",
                    "skills": [],
                    "id": 146671
                },
                {
                    "companyName": "new companynew company",
                    "countryId": 661882,
                    "country": "Åland",
                    "companySize": 1,
                    "companySizeStr": "Startup",
                    "industry": null,
                    "industryId": 3,
                    "positionId": 1,
                    "position": "Backend Engineer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-12T00:00:00",
                    "endDate": "2020-03-27T00:00:00",
                    "description": "new description",
                    "skills": [],
                    "id": 146672
                },
                {
                    "companyName": "new companynew company",
                    "countryId": 661882,
                    "country": "Åland",
                    "companySize": 1,
                    "companySizeStr": "Startup",
                    "industry": null,
                    "industryId": 3,
                    "positionId": 3,
                    "position": "Full Stack Engineer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-05T00:00:00",
                    "endDate": "2020-03-02T00:00:00",
                    "description": "dsfdsdfsfd",
                    "skills": [],
                    "id": 146669
                },
                {
                    "companyName": "new companynew company",
                    "countryId": 661882,
                    "country": "Åland",
                    "companySize": 1,
                    "companySizeStr": "Startup",
                    "industry": null,
                    "industryId": 3,
                    "positionId": 3,
                    "position": "Full Stack Engineer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-05T00:00:00",
                    "endDate": "2020-03-02T00:00:00",
                    "description": "dsfdsdfsfd",
                    "skills": [],
                    "id": 146670
                },
                {
                    "companyName": "new companynew company",
                    "countryId": 661882,
                    "country": "Åland",
                    "companySize": 1,
                    "companySizeStr": "Startup",
                    "industry": null,
                    "industryId": 3,
                    "positionId": 1,
                    "position": "Backend Engineer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-05T00:00:00",
                    "endDate": "2020-03-02T00:00:00",
                    "description": "dsfdsdfsfd",
                    "skills": [],
                    "id": 146673
                },
                {
                    "companyName": "new companynew company",
                    "countryId": 661882,
                    "country": "Åland",
                    "companySize": 1,
                    "companySizeStr": "Startup",
                    "industry": null,
                    "industryId": 3,
                    "positionId": 1,
                    "position": "Backend Engineer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-05T00:00:00",
                    "endDate": "2020-03-02T00:00:00",
                    "description": "dsfdsdfsfd",
                    "skills": [],
                    "id": 146674
                }
            ],
            "companyName": "new companynew company",
            "countryId": 661882,
            "country": "Åland",
            "companySize": 1,
            "companySizeStr": "Startup",
            "industry": null,
            "industryId": 3,
            "id": 146671
        },
        {
            "workExperiences": [
                {
                    "companyName": "FInal company",
                    "countryId": 3469034,
                    "country": "Brazil",
                    "companySize": 2,
                    "companySizeStr": "Mid Size",
                    "industry": null,
                    "industryId": 12,
                    "positionId": 7,
                    "position": "UI/UX Designer",
                    "isCurrentRole": null,
                    "startDate": "2020-03-02T00:00:00",
                    "endDate": null,
                    "description": "just a description",
                    "skills": [],
                    "id": 146675
                }
            ],
            "companyName": "FInal company",
            "countryId": 3469034,
            "country": "Brazil",
            "companySize": 2,
            "companySizeStr": "Mid Size",
            "industry": null,
            "industryId": 12,
            "id": 146675
        },
        {
            "workExperiences": [
                {
                    "companyName": "sdasasdas",
                    "countryId": 3469034,
                    "country": "Brazil",
                    "companySize": null,
                    "companySizeStr": null,
                    "industry": null,
                    "industryId": null,
                    "positionId": null,
                    "position": null,
                    "isCurrentRole": null,
                    "startDate": "2019-08-01T00:00:00",
                    "endDate": "2019-01-01T00:00:00",
                    "description": "adsasa",
                    "skills": [],
                    "id": 119938
                }
            ],
            "companyName": "sdasasdas",
            "countryId": 3469034,
            "country": "Brazil",
            "companySize": null,
            "companySizeStr": null,
            "industry": null,
            "industryId": null,
            "id": 119938
        }
    ]
}

storiesOf("Sections|User Company Experience", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHUserCompanyExperienceSection
                yearsOfExperience={"- 6yrs 3 mos"}
                experience={experience}
                onEvent={e => console.log(e)}
            />
        </div>
    ))
    .add("preloading", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHUserCompanyExperienceSection
                yearsOfExperience={"- 6yrs 3 mos"}
                experience={experience}
                onEvent={e => console.log(e)}
                preLoading={true}
            />
        </div>
    ))
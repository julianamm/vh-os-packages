import React from "react";
import { storiesOf } from "@storybook/react";
import VHTitleDescription from ".";

storiesOf("Components|Title Description", module)

.add("block", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <VHTitleDescription 
      title="Rank your top 3 skills"
      description="Highest proficiency level; 3 = Lowest proficiency level"
      titleVariant="bodyplatform"
      descriptionVariant=""
      data={{}}
      onEvent={(e) => console.log(e)}
    />
  </div>
))  
.add("H1 Title default", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <VHTitleDescription 
      title="Rank your top 3 skills"
      description="Highest proficiency level; 3 = Lowest proficiency level"
      titleVariant="h1"
      descriptionVariant="bodyweb"
      data={{}}
      onEvent={(e) => console.log(e)}
    />
  </div>
))  
.add("H1 Title blue", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <VHTitleDescription 
      title="Rank your top 3 skills"
      titleColor="primary-light"
      description="Highest proficiency level; 3 = Lowest proficiency level"
      titleVariant="h1"
      descriptionVariant="bodyweb"
      data={{}}
      onEvent={(e) => console.log(e)}
    />
  </div>
))  
.add("inline", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <VHTitleDescription 
      title="Phone number"
      description="(optional)"
      inline={true}
      data={{}}
      titleVariant="subtitle3"
      descriptionVariant="caption"
      onEvent={(e) => console.log(e)}
    />
  </div>
))  
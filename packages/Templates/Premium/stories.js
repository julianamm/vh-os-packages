import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumTemplate from ".";
import Mock from "./Mock";


storiesOf("Templates|Premium", module)

  .add("default", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100%" }}>
      <VHPremiumTemplate
        intro={Mock.intro}
        onEvent={ e => {
            console.log(e)
        }}
      />
    </div>
  ))
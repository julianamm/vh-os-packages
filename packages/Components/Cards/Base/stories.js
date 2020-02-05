import React from "react";
import { storiesOf } from "@storybook/react";
import VHCardBase from ".";

storiesOf("Components|Cards/Base", module)

.add("default", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <div style={{ width: "270px", height: "170px" }}>
      <VHCardBase>
        <div>VHCardBase Base</div>
      </VHCardBase>
    </div>
  </div>
))  

.add("no hover", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <div style={{ width: "270px", height: "170px" }}>
      <VHCardBase noHover>
        <div>VHCardBase Base</div>
      </VHCardBase>
    </div>
  </div>
))

.add("no border", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <div style={{ width: "270px", height: "170px" }}>
      <VHCardBase noBorder>
        <div>VHCardBase Base</div>
      </VHCardBase>
    </div>
  </div>
))

.add("favorite", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <div style={{ width: "270px", height: "170px" }}>
      <VHCardBase favorite>
        <div>VHCardBase Base</div>
      </VHCardBase>
    </div>
  </div>
));

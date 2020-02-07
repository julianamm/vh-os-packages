import React from "react";
import { storiesOf } from "@storybook/react";
import VHIconText from ".";

storiesOf("Components|Icon Text", module)

.add("default", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <VHIconText  text="Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum" />
  </div>
))  
.add("color", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
    <VHIconText icon="bullet" textColor="primary-light" iconColor="primary-light" variant="caption" text="Vue.js" />
  </div>
))  
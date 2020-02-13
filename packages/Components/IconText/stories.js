import React from "react";
import { storiesOf } from "@storybook/react";
import VHIconText from ".";

storiesOf("Components|Icon Text", module)

.add("default", () => (
    <VHIconText
      text="Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
      onEvent={(event) => console.log(event)}  
    />
))  
.add("color", () => (
    <VHIconText
      icon="bullet-primary"
      textColor="primary-light"
      iconColor="primary-light"
      variant="caption"
      text="Vue.js"
      onEvent={(event) => console.log(event)}  
    />
))  
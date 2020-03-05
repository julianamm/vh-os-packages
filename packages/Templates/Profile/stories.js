import React from "react";
import { storiesOf } from "@storybook/react";
import VHProfileTemplate from ".";
import Mock from "./Mock";

const controls = {
  gender: {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  },
  citizenship: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error'
  },
  location: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  phone: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  position: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  yearsOfExperience: {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  },
  workAs: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  openedPosition: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  }
}

storiesOf("Templates|Profile", module)

  .add("default", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100%" }}>
      <VHProfileTemplate
        controls={controls}
      />
    </div>
  ))
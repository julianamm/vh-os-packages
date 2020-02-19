import React from "react";
import { storiesOf } from "@storybook/react";
import VHProfileTemplate from ".";
import Mock from "./Mock";


storiesOf("Templates|Profile", module)

.add("default", () => (
  <div style={{ backgroundColor: "#f2f2f2", height: "100%"}}>
    <VHProfileTemplate
      general={{
        controls:{
          gender: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          citizenship: {
            loading: false,
            error: true,
            success: false,
            message: 'erro vindo do banco'
          },
          currentLocation: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
          phone: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          }
        },
        options:{
          gender: {
            items: Mock.General.gender,
            currentItem: [Mock.General.gender[1]]
          },
          currentLocation: {
            items: Mock.General.currentLocaltion,
            currentItem: [Mock.General.currentLocaltion[0]]
          },
          citizenship: {
            items: Mock.General.citizenship,
            currentItem: [Mock.General.citizenship[2]]
          },
        },
        phone: "+2 778 834 7347"
      }}

      onEvent={e => {
        console.log(e)
      }}

      skills={{
        controls:{
          position: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
          workAs: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
          openedPosition: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
        },
        workAs: Mock.SkillsItems,
        mainSkills: Mock.SkillsItems,
        positions: Mock.SkillsItems,
        data: Mock.Skills
      }}

      social={{
        controls: {
          linkedin: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          github: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          world: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
        },

        data: Mock.Social
      }}
    />
  </div>
))
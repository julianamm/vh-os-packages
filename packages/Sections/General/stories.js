import React from "react";
import { storiesOf } from "@storybook/react";
import VHGeneralSection from ".";

const currentLocation = [
    {
      color: '#00B8D9',
      isFixed: true,
      label: 'Canada',
      value: 'c'
    },
    {
      color: '#0052CC',
      isDisabled: false,
      label: 'Brazil',
      value: 'b'
    },
    {
      color: '#0052CC',
      isDisabled: true,
      label: 'Other',
      value: 'o'
    },
  ]

const citizenship = [
    {
      color: '#00B8D9',
      isFixed: true,
      label: 'Canada',
      value: 'c'
    },
    {
      color: '#0052CC',
      isDisabled: false,
      label: 'Brazil',
      value: 'b'
    },
    {
      color: '#0052CC',
      isDisabled: true,
      label: 'Other',
      value: 'o'
    },
  ]

const gender = [
    {
      color: '#00B8D9',
      isFixed: true,
      label: 'Male',
      value: 'm'
    },
    {
      color: '#0052CC',
      isDisabled: false,
      label: 'Famale',
      value: 'f'
    },
    {
      color: '#0052CC',
      isDisabled: true,
      label: 'Other',
      value: 'o'
    },
  ]

storiesOf("Sections|General", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHGeneralSection
                controls={{
                    gender: {
                        loading: false,
                        error: false,
                        success: false,
                        message: ''
                    },
                    citizenship: {
                        loading: true,
                        error: false,
                        success: false,
                        message: ''
                    },
                    currentLocation: {
                        loading: false,
                        error: true,
                        success: false,
                        message: 'Database error'
                    }
                }}
                options={{
                    gender: {
                        items: gender,
                        currentItem: [gender[1]]
                    },
                    currentLocation: {
                        items: currentLocation,
                        currentItem: [currentLocation[1]]
                    },
                    citizenship: {
                        items: citizenship,
                        currentItem: [citizenship[1]]
                    },
                }}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ));
import React from "react";
import { storiesOf } from "@storybook/react";
import VHSkillsSection from ".";

const items = [
    {
      color: '#00B8D9',
      isFixed: true,
      label: 'Item 1',
      value: 'c'
    },
    {
      color: '#0052CC',
      isDisabled: false,
      label: 'Item 2',
      value: 'b'
    },
    {
      color: '#0052CC',
      isDisabled: true,
      label: 'Item 3',
      value: 'o'
    },
  ]

storiesOf("Sections|Skills", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHSkillsSection
                controls={{
                    position: {
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    skills: {
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    openedPosition: {
                        loading: false,
                        error: false,
                        success: false,
                        checked: true,
                        message: 'Database error'
                    },
                }}
                options={{
                    position: {
                        items: items,
                        currentItem: [items[1]]
                    },
                    skills: {
                        items: items,
                        currentItem: [items[1]]
                    }
                }}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ));
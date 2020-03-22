import React from "react";
import { storiesOf } from "@storybook/react";
import VHSkillsSection from ".";

storiesOf("Sections|Social", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHSkillsSection
                controls={{
                    linkedin: {
                        loading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    github: {
                        loading: false,
                        error: true,
                        success: false,
                        message: 'Database error'
                    },
                    world: {
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                }}

                data={{
                    linkedin: {
                        value: '123',
                    },
                    github: {
                        value: '123',
                    },
                    world: {
                        value: '123',
                    },

                }}

                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
    .add("Preloading", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHSkillsSection
                preLoading
                controls={{
                    linkedin: {
                        loading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    github: {
                        loading: false,
                        error: true,
                        success: false,
                        message: 'Database error'
                    },
                    world: {
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                }}

                data={{
                    linkedin: {
                        value: '123',
                    },
                    github: {
                        value: '123',
                    },
                    world: {
                        value: '123',
                    },

                }}

                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ));
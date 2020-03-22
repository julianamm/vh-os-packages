import React from "react";
import { storiesOf } from "@storybook/react";
import VHEducationSection from ".";

const education = [
    {
        title: 'Specilist, Interaction Desing',
        subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
    },
    {
        title: 'Specilist, Interaction Desing',
        subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
    }
]

const items = [
    { value: 0, label: 'No degree' },
    { value: 1, label: 'College (two-year degree)' },
    { value: 2, label: 'Bachelor’s' },
    { value: 3, label: 'Master’s' },
    { value: 4, label: 'PhD' }
]

const currentItem = [items[4]]

const controls = { degree: { loading: false, success: true, error: false } }

storiesOf("Sections|Education", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHEducationSection
                education={education}
                items={items}
                currentItem={currentItem}
                controls={controls}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
    .add("Preloading", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHEducationSection
                education={education}
                preLoading
                items={items}
                currentItem={currentItem}
                controls={controls}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
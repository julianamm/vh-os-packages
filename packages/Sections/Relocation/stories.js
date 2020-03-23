import React from "react";
import { storiesOf } from "@storybook/react";
import VHRelocationSection from ".";

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

const controls = { salaryRangeCad: { loading: false, success: true, error: false },
salaryRangeEur: { loading: false, success: true, error: false },
visaStatusEU: { loading: false, success: true, error: false },
visaStatusCanadian: { loading: false, success: true, error: false },
companySize: {loading: false, success: true, error: false}    }

storiesOf("Sections|Relocation", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHRelocationSection
                education={education}
                items={items}
                currentItem={currentItem}
                controls={controls}
                loading={true}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
    .add("preloading", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHRelocationSection
                education={education}
                items={items}
                currentItem={currentItem}
                controls={controls}
                preLoading={true}
                loading={true}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
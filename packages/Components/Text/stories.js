import React from "react";
import { storiesOf } from "@storybook/react";
import VHText from ".";

storiesOf("Components|Text", module)
    .add("Types", () => (
        <div>
            <VHText variant={'h1'} text="H1 - TEXT" onEvent={e => {
                console.log(e)
            }} />
            <VHText variant={'h2'} text="H2 - TEXT" onEvent={e => {
                console.log(e)
            }} />
            <VHText variant={'h3'} text="H3 - TEXT" onEvent={e => {
                console.log(e)
            }} />
            <VHText variant={'h4'} text="H4 - TEXT" onEvent={e => {
                console.log(e)
            }} />
            <VHText variant={'h5'} text="H5 - TEXT" onEvent={e => {
                console.log(e)
            }} />
            <VHText variant={'h6'} text="H6 - TEXT" onEvent={e => {
                console.log(e)
            }} />
        </div>
    ));

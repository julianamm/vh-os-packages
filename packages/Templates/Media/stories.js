import React from "react";
import { storiesOf } from "@storybook/react";
import VHMediaTemplate from ".";


storiesOf("Templates|Media", module)

.add("default", () => (
    <VHMediaTemplate 
        title="Media Contact"
        name="Karli Leitl"
        email="karli@switchboardpr.com"
        phone="778-401-6040 or 403-975-7707"
        press="PRESS"
    />
))  
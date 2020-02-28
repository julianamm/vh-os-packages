import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHMediaContactCard from "./index";

storiesOf("Components|Media Contact Card", module)
    .add("Types", () => (
        <Row>
            <VHMediaContactCard
                title="Media Contact"
                name="Karli Leitl"
                email="karli@switchboardpr.com"
                phone="778-401-6040 or 403-975-7707"
            />
        </Row>
    ));

import React from "react";
import { storiesOf } from "@storybook/react";
import OffersMock from "./OffersMock";
import VHVisaPipelineTemplate from ".";
import WorkPermitMock from "./WorkPermitMock";

const MockData = [OffersMock, WorkPermitMock]

storiesOf("Templates|VisaPipeline", module)

.add("default", () => (
    <VHVisaPipelineTemplate data={MockData} />
))  
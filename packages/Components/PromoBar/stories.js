import React from "react";
import { storiesOf } from "@storybook/react";
import VHPromoBar from ".";

const items = {
    textPromo: "Get up to 50% off on VanHack Premium",
    numDays: "03",
    days: "Days",
    numHours: "12",
    hours: "Hours",
    numMin: "16",
    min: "Min",
    numSec: "22",
    sec: "Sec",
    label: "Get Promo",
};

storiesOf("Components|Promo Bar", module)
    .add("Types", () => (
        <div>
           <VHPromoBar 
                textPromo={items.textPromo}
                numDays={items.numDays}
                days={items.days}
                numHours={items.numHours}
                hours={items.hours}
                numMin={items.numMin}
                min={items.min}
                numSec={items.numSec}
                sec={items.sec}
                label={items.label}
                onEvent={ e => {
                    console.log(e)
                }}
           />
        </div>
    ));

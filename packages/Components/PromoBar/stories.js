import React from "react";
import { storiesOf } from "@storybook/react";
import VHPromoBar from ".";

const items = {
    textPromo: "Get up to 50% off on VanHack Premium",
    label: "Get 50% off",
    endDate: new Date(),
    backgroundColor: 'red'
};

storiesOf("Components|Promo Bar", module)
    .add("Types", () => (
        <div>
           <VHPromoBar 
                textPromo={items.textPromo}
                label={items.label}
                endDate={items.endDate.setDate(items.endDate.getDate() + 2)}
                backgroundColor={items.backgroundColor}
                onEvent={ e => {
                    console.log(e)
                }}
           />
        </div>
    ));
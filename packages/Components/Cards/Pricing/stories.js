import React from 'react';
import { storiesOf } from '@storybook/react';
import VHCardPricing from '.';

storiesOf('Components|Cards/Pricing', module)

.add('Outlined without top chips', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "360px", padding: "24px"}}>
        <VHCardPricing
            period="Month"
            price="65"
            unit="CAD$/month"
            subscription="Renew every month"
            cta="Get Started"
            outlineBtn
            note=""
            onEvent={(event) => console.log(event)}
        />
    </div>
))

.add('Outlined', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "360px", padding: "24px"}}>
        <VHCardPricing
            show
            save="Save 15%"
            noHoverChip
            transparentChip
            period="Month"
            price="65"
            unit="CAD$/month"
            subscription="Renew every month"
            cta="Get Started"
            outlineBtn
            note=""
            onEvent={(event) => console.log(event)}
        />
    </div>
))
.add('Secondary', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "360px", padding: "24px"}}>
        <VHCardPricing
            show
            save="Save almost 25%"
            noHoverChip
            transparentChip
            round
            period="Month"
            price="65"
            unit="CAD$/month"
            subscription="Renew every month"
            cta="Get Started"
            secondaryBtn
            note="The choice of 46% of premium members"
            onEvent={(event) => console.log(event)}
        />
    </div>
));

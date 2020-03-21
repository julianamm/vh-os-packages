import React from 'react';
import ReactDOM from 'react-dom';
import VHPremiumPricingSection from '.';

it('renders VHPremiumPricingSection component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHPremiumPricingSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});


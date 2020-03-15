import React from 'react';
import ReactDOM from 'react-dom';
import VHPremiumServicesSection from '.';

it('renders PremiumServicesSection component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHPremiumServicesSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});

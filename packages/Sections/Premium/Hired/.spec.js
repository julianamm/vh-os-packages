import React from 'react';
import ReactDOM from 'react-dom';
import VHPremiumHiredSection from '.';

it('renders VHPremiumHiredSection component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHPremiumHiredSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import VHPremiumFaqSection from '.';

it('renders VHPremiumFaqSection component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHPremiumFaqSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});


import React from 'react';
import ReactDOM from 'react-dom';
import VHPremiumIntroSection from '.';

it('renders PremiumIntroSection component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHPremiumIntroSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import VHPremiumSuccessCasesSection from '.';

it('renders VHPremiumSuccessCasesSection component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHPremiumSuccessCasesSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});


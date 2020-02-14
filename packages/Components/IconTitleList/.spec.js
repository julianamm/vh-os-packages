import React from 'react';
import ReactDOM from 'react-dom';
import VHIconTitleList from '.';

it('renders IconTitleList component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHIconTitleList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

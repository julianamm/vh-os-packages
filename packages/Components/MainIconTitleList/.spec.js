import React from 'react';
import ReactDOM from 'react-dom';
import VHMainIconTitleList from '.';

it('renders MainIconTitleList component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHMainIconTitleList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import VHMediaContactCard from '.';

it('renders VHMediaContactCard component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHMediaContactCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});

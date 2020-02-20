
import React from 'react';
import ReactDOM from 'react-dom';
import VHBlackTitleDescription from '.';

it('renders BlackTitleDescription component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHBlackTitleDescription title="Full Stack Developer"
    description="Oct 2019 - Present . 3 mos" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

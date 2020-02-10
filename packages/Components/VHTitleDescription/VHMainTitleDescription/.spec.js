import React from 'react';
import ReactDOM from 'react-dom';
import VHMainTitleDescription from '.';

it('renders VHMainTitleDescription component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHMainTitleDescription title="Drift Way"
    rightTitle="(5 yr 9 mos)"
    description="E-comerce - Startup - Belo Horizonte - Brazil" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

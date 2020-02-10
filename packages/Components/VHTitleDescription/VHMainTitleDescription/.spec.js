import React from 'react';
import ReactDOM from 'react-dom';
import VHMainTitleDescription from '.';

it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHMainTitleDescription title="Valgariam"
    description="E-comerce - Startup - Belo Horizonte - Brazil" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import VHInfoTitleDescription from '.';

it('renders InfoTitleDescription component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHInfoTitleDescription title="Rank your top 3 skills"
    description="Highest proficiency level; 3 = Lowest proficiency level" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import VHUserPositonExperience from '.';

it('renders UserPositonExperience component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VHUserPositonExperience headline="Full Stack Developer"
    period="Oct 2019 - Present . 3 mos"
    skills={ArrayOfSkills}
    description={ArrayOfDescriptions} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import VHButton from '.';

it('renders button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHButton>Button</VHButton>, div);
  ReactDOM.unmountComponentAtNode(div);
});

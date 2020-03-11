import React from 'react';
import ReactDOM from 'react-dom';
import VHInput from '.';

it('renders button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

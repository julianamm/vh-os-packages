import React from 'react';
import ReactDOM from 'react-dom';
import VHInputSimpleWithButton from '.';

it('renders VHInputSimpleWithButton without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHInputSimpleWithButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

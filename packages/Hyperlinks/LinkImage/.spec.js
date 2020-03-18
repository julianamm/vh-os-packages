import React from 'react';
import ReactDOM from 'react-dom';
import VHLinkImage from '.';

it('renders VHLinkImage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHLinkImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
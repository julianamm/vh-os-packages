import React from 'react';
import ReactDOM from 'react-dom';
import VHImgCardsOverlay from '.';

it('renders VHImgCardsOverlay without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHImgCardsOverlay />, div);
  ReactDOM.unmountComponentAtNode(div);
});

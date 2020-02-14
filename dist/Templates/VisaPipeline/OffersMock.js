"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var OffersMock = {
  id: 123,
  name: 'Offers Accepted',
  order: 1,
  type: 1,
  shortName: 'offers',
  total: 3,
  avgTime: '5 days',
  items: [{
    id: 1,
    onTime: true,
    createdOn: '2020-01-31T20:00:00Z',
    highlight: true,
    // the yellow star on the card
    salary: '100,00',
    dueDate: '2020-01-31T20:00:00Z',
    description: 'this is a test',
    invoice: 'unset',
    projectedStartDate: '2020-01-31T20:00:00Z',
    user: {
      id: 456,
      // profile id
      name: 'Marcelo Coelho',
      email: 'teste@teste.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
      isPremium: true
    },
    job: {
      id: 873,
      location: 'Vancouver, BC',
      Position: 'Data Analyst',
      companyName: 'Vanhack'
    },
    comments: 5
  }, {
    id: 1,
    onTime: true,
    createdOn: '2020-01-31T20:00:00Z',
    highlight: true,
    // the yellow star on the card
    salary: '100,00',
    dueDate: '2020-01-31T20:00:00Z',
    description: 'this is a test',
    invoice: 'unset',
    projectedStartDate: '2020-01-31T20:00:00Z',
    user: {
      id: 456,
      // profile id
      name: 'Gustavo Franco',
      email: 'teste@teste.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
      isPremium: true
    },
    job: {
      id: 873,
      location: 'Vancouver, BC',
      Position: 'Data Analyst',
      companyName: 'Vanhack'
    },
    comments: 5
  }, {
    id: 1,
    onTime: true,
    createdOn: '2020-01-31T20:00:00Z',
    highlight: true,
    // the yellow star on the card
    salary: '100,00',
    dueDate: '2020-01-31T20:00:00Z',
    description: 'this is a test',
    invoice: 'unset',
    projectedStartDate: '2020-01-31T20:00:00Z',
    user: {
      id: 456,
      // profile id
      name: 'Aline Melo',
      email: 'teste@teste.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
      isPremium: true
    },
    job: {
      id: 873,
      location: 'Vancouver, BC',
      Position: 'Data Analyst',
      companyName: 'Vanhack'
    },
    comments: 5
  }]
};
var _default = OffersMock;
exports.default = _default;
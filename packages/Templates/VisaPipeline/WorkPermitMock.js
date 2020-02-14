const WorkPermitMock = {
    id: 123,
    name: 'Work Permit Processes',
    order: 2,
    type: 1,
    shortName: 'work',
    total: 2,
    avgTime: '6 days',
    items: [{
        id: 1,
        onTime: true,
        createdOn: '2020-01-31T20:00:00Z',
        highlight: true, // the yellow star on the card
        salary: '100,00',
        dueDate: '2020-01-31T20:00:00Z',
        description: 'this is a test',
        invoice: 'unset',
        projectedStartDate: '2020-01-31T20:00:00Z',
        user: {
            id: 456,// profile id
            name: 'Tatiane Arruda',
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
    },
    {
        id: 2,
        onTime: true,
        createdOn: '2020-01-31T20:00:00Z',
        highlight: true, // the yellow star on the card
        salary: '100,00',
        dueDate: '2020-01-31T20:00:00Z',
        description: 'this is a test',
        invoice: 'unset',
        projectedStartDate: '2020-01-31T20:00:00Z',
        user: {
            id: 456,// profile id
            name: 'Juliana Neto',
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
}

export default WorkPermitMock;
const GeneralItems = [
    {
      color: '#00B8D9',
      isFixed: true,
      label: 'Item 1',
      value: 'c'
    },
    {
      color: '#0052CC',
      isDisabled: false,
      label: 'Item 2',
      value: 'b'
    },
    {
      color: '#0052CC',
      isDisabled: true,
      label: 'Item 3',
      value: 'o'
    },
  ]

  const General = {
    phone: "+1 778 834 7347",
    gender: GeneralItems,
    currentLocaltion: GeneralItems,
    citizenship: GeneralItems,
  }


  const skillsItems = [
    {
      label: 'Item 1',
      value: 'c'
    },
    {
      label: 'Item 2',
      value: 'b'
    },
    {
      label: 'Item 3',
      value: 'o'
    },
  ]
const SkillsApiResponse = {
  position: {
    current: skillsItems[0],
    yearOfExperience: skillsItems[2]
  },
  workAs: {
    current: skillsItems
  },
  mainSkills: [
    {
      current: skillsItems[1],
      order: 0,
      yearOfExperience: skillsItems[1]
    },
    {
      current: skillsItems[2],
      order: 1,
      yearOfExperience: skillsItems[1]
    }
  ],
  openedPosition: true
}

const social = {
    linkedin: {
        value: '123',
      },
      github: {
        value: '123',
      },
      world: {
        value: '123',
      }
    }

const Mock = {}
Mock.General = General
Mock.Skills = SkillsApiResponse
Mock.SkillsItems = skillsItems
Mock.Social = social

export default Mock;
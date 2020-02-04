# This project was Created by VanHack development community!

All Components are made using [ReactJS](https://reactjs.org/) and [Styled Components](https://styled-components.com/) and we use [Storybook](https://storybook.js.org/) as a renderring

# Release Current
`release/1`

# How to contribute:

* Become a VanHack Organization Member(not mandatory) 
* Create a [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) on Github
* Keep your fork up to date
* Create a new branch from *MASTER*
* Commit on your own fork
* Create a pull request to **open RC**

# How to run:

* Clone the [project](#)
* run `yarn install`
* run `yarn add styled-componets` *install styled componets but discard the changes on package.json because the styled components must be installed as peerDependence*
* run `yarn start`
* The project will run at the port [http://localhost:6007](http://localhost:6007)


# Architecture:

 ```
.storybook                      #STORYBOOK CONFIG
│
└───assets
│   └───icons                  # Put all icons inside
└───packages
│   └───Colors                 # Colors configuration
│   └───Grid                   # Grid configuration we must use this component to create all componets grid
|   └───Components    
|       └───input              # All inputs should be created inside input folder
|           └───Simple         # A simple component
|               └───.spec.js   # All tests should be write in this file
|               └───index.jsx  # The component implementaion
|               └───stories.js # The component stories for the Storybok
|               └───styles.js  # If needed all component styles should be here
|
└─── .babelrc                   # BABEL CONFIGURATION
└─── package.json               # PACKAGE JSON ***(Don't commit the package.json ever)**
└─── README.md                  # README.md Changes are welcome
```

## Mandatory
> all components must be created inside `packages/Components`

##### If you have any question please ask on the slack and we'll help you.

# Big Thanks and [WeHackTogheter](#)!!!

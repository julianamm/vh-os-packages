import React from 'react'
import { storiesOf } from '@storybook/react'
import VHCardVisaProcess from '.'
import VHCardVisaProcessSkeleton from './skeleton'

storiesOf('Components|Cards/Visa Process', module)

.add('default', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "300px", padding: "24px"}}>
        <VHCardVisaProcess
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            name="Manuel Barros Reyes"
            companyName="Bank of America"
            positionName="Fron-End Developer"
            cityName="Vancouver, BC"
            time={6}
            comments="6"
            onEvent={(event) => console.log(event)}
            avgTime={4}
        />
    </div>
))
.add('Invoiced', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "300px", padding: "24px"}}>
        <VHCardVisaProcess
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            name="Manuel Barros Reyes"
            companyName="Bank of America"
            positionName="Fron-End Developer"
            cityName="Vancouver, BC"
            time={6}
            comments="6"
            invoiced
            onEvent={(event) => console.log(event)}
            avgTime={4}
        />
    </div>
))
.add('Favorite', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "300px", padding: "24px"}}>
        <VHCardVisaProcess
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            name="Manuel Barros Reyes"
            companyName="Bank of America"
            positionName="Fron-End Developer"
            cityName="Vancouver, BC"
            time={3}
            comments="6"
            favorite
            onEvent={(event) => console.log(event)}
            avgTime={4}
        />
    </div>
))
.add('skeleton', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "300px", padding: "24px"}}>
        <VHCardVisaProcessSkeleton />
    </div>
))
.add('skeleton multiply', () => (
    <div style={{backgroundColor: "#f2f2f2", width: "300px", padding: "24px"}}>
        <VHCardVisaProcessSkeleton random/>
    </div>
))

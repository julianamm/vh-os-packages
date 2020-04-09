import React from 'react'
import { Row, Container } from '../../Grid';
import VHText from '../Text/index';
import VHCardBase from '../Cards/Base/index';

import {
  TimerContainer
} from './styles'

const VHTimer = props => {
  const [seconds, setSeconds] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [days, setDays] = React.useState(0)
  const [months, setMonths] = React.useState(0)
  const [currentDate, setCurrent] = React.useState(0)

  const start = endDate => {
    requestAnimationFrame(() => {
      const now = new Date()
      const currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000)

      if (currentDate >= endDate) {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setDays(0)
        setMonths(0)
        props.onEndTime()
      } else {
        setCurrent(currentDate)
        let diffSeconds = Math.abs(currentDate.getSeconds() - 60)
        if (diffSeconds === 60) {
          diffSeconds = 0
        }

        let diffMinutes = endDate.getMinutes() - (currentDate.getMinutes() - 60)
        if (currentDate.getMinutes() < endDate.getMinutes()) {
          diffMinutes = parseInt(endDate.getMinutes()) - currentDate.getMinutes()
        }
        // let diffHours = endDate.getHours() - currentDate.getHours()

        if ( diffMinutes > 0) {
          diffMinutes -=1
        }

        if ( diffMinutes >= 60 ) {
          diffMinutes = 0
        }
        const ONE_DAY = 1000 * 60 * 60
        const date_ini_ms = currentDate.getTime()
        const date_fim_ms = endDate.getTime()
        const diferenca = date_fim_ms - date_ini_ms

        let diffHours = Math.abs(Math.round(diferenca/ONE_DAY))

        const diffDays = endDate.getDate() - currentDate.getDate()
        // diffHours = parseInt(diffHours) + (parseInt(diffDays) * 24)

        const diffMonths = endDate.getMonth() - currentDate.getMonth()

        if (diffHours > 0) {
          diffHours -=1
        }

        if (props.debugger) {
          console.log(
            {
              "Seconds": diffSeconds,
              "Minutes": diffMinutes,
              "Hours": diffHours,
              "Days": diffDays,
              "Months": diffMonths
            }
          )
        }

        setSeconds(diffSeconds)
        setMinutes(diffMinutes)
        setHours(diffHours)
        setDays(diffDays)
        setMonths(diffMonths)
        start(endDate)
      }
    })
  }

  React.useEffect(() => {
    console.log(props.endDate)
    start(new Date(props.endDate))
  }, [])

  return (
    <React.Fragment>
    <TimerContainer>
    <Row row alignItemsCenter>
                                <Row marginRight={1} marginLeft={2}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={days}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text='Days'
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                                <Row marginRight={1}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={hours}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text='Hours'
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                                <Row marginRight={1}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={minutes}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text='Min'
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                                <Row marginRight={3}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={seconds}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text='Sec'
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                            </Row>
    </TimerContainer>
  </React.Fragment>
  )
}

export default VHTimer
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Card from '../Cards/Base'
import VHProgressBar from '../ProgressBar'
import VHButton from '../Button'
import VHText from '../Text'


const VHOnboarding = props => {

  console.log('props', props)

  const [currentStep, setCurrentStep] = useState(props.currentStep)

  return (
    <Container justifyCenter fullHeight style={{backgroundColor:'blue'}} fullWidth>
      <Row alignItemsCenter>
        <Card noPadding width='50%' height='50vh'>
            <Row>
              <VHProgressBar
                steps={props.steps}
                currentStep={currentStep}
                onEvent={e => {
                  console.log(e)
                }}
              />
            </Row>
            <Row alignItemsCenter  style={{height: '100%'}}>
              <Row style={{width: '90%', height: 'calc(100% - 10px)'}} >
                <Row style={{height: '100%', overflow:'scroll'}}>
                {
                  props.children
                }
                </Row>
                <Row row justifySpaceBetween alignItemsCenter style={{padding: '12px 0'}}>
                  <span>
                    {
                      currentStep > 1 && (
                        <VHButton
                          className=""
                          outline
                          label="Back"
                          disabled={currentStep ===  1}
                          onEvent={e=>{
                            props.onEvent({
                              type: "OnChangeStep",
                              origin: "VHOnboarding",
                              props: {
                                data: {
                                  stepMinor: currentStep - 2,
                                  step: currentStep - 1,
                                  stepPlus: currentStep
                                }
                              }
                            })
                            setCurrentStep(currentStep - 1)
                          }}
                          primary
                          data={props}
                        />
                      )
                    }
                  </span>
                  <VHText
                    text={`${currentStep} / ${props.steps}`}
                    variant={"platform1"}
                    color={"gray-60"}
                  />
                  <VHButton
                    className=""
                    label="Next"
                    disabled={currentStep === (props.steps + 1)}
                    onEvent={e=>{
                      props.onEvent({
                        type: "OnChangeStep",
                        origin: "VHOnboarding",
                        props: {
                          data: {
                            stepMinor: currentStep,
                            step: currentStep + 1,
                            stepPlus: currentStep + 2
                          }
                         }
                      })
                      setCurrentStep(currentStep + 1)
                    }}
                    primary
                    data={props}
                  />
                </Row>
              </Row>
            </Row>
        </Card>
      </Row>
    </Container>
  )

}

VHOnboarding.defaultProps = {
  className: "",
};

VHOnboarding.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string,
  onEvent: PropTypes.func.isRequired
};

export default VHOnboarding

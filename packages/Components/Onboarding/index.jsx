import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Card from '../Cards/Base'
import VHProgressBar from '../ProgressBar'
import VHButton from '../Button-New'
import VHText from '../Text'
import VHPreloader from '../Preloader'
import VanhackLogo from '../../../assets/images/vanhack-logo-light.svg'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import FifthStep from './FifthStep'
import SixStep from './SixStep'
import StartStep from './StartStep'
import FinishStep from './FinishStep'


const VHOnboarding = props => {

  const [currentStep, setCurrentStep] = useState(props.currentStep)

  const [displayNone, setDisplayNone] = useState(false)

  React.useEffect(() => {
    setCurrentStep(props.currentStep);
  }, [props.currentStep])

  return (
    <Container displayNone={displayNone} currentStep={currentStep} animation justifyCenter fullHeight style={{ backgroundImage: 'linear-gradient(to bottom right, #56CCF2, #0675CE)' }} fullWidth>
      <img style={{ marginBottom: '50px' }} src={VanhackLogo} />
      <Row alignItemsCenter>
        <Card noPadding width='730px' height='580px'>
          {props.controls.language.loading ?
            <VHPreloader type="fullPage" size="md" />
            :
            <React.Fragment>
              {
                currentStep > 0 &&
                <Row>
                  <VHProgressBar
                    steps={props.steps}
                    currentStep={currentStep}
                    onEvent={props.onEvent}
                  />
                </Row>
              }
              <Row alignItemsCenter style={{ height: '100%' }}>
                <Row style={{ width: '100%', height: 'calc(100% - 10px)', boxSizing: 'border-box', padding: '33px'}} >
                  <Row style={{ height: '100%', overflow: 'scroll' }}>
                    {
                      currentStep === 0 &&
                      <StartStep {...props} onEvent={props.onEvent} setCurrentStep={() => setCurrentStep(1)} />
                    }
                    {
                      currentStep === 1 &&
                      <FirstStep {...props} />
                    }
                    {
                      currentStep === 2 &&
                      <SecondStep {...props} />
                    }
                    {
                      currentStep === 3 &&
                      <ThirdStep {...props} />
                    }
                    {
                      currentStep === 4 &&
                      <FourthStep {...props} />
                    }
                    {
                      currentStep === 5 &&
                      <FifthStep {...props} />
                    }
                    {
                      currentStep === 6 &&
                      <SixStep {...props} />
                    }
                    {
                      currentStep > 6 &&
                      <FinishStep {...props} />
                    }
                  </Row>
                  {
                    currentStep > 0 &&
                    <Row row justifySpaceBetween alignItemsCenter style={{ padding: '12px 0' }}>
                      <span>
                        {
                          currentStep > 1 && (
                            <VHButton
                              className=""
                              textButton
                              label="Back"
                              disabled={currentStep === 1}
                              onEvent={e => {
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
                        label={currentStep < 6  ? "Next" : "Finish"}
                        disabled={currentStep === (props.steps + 1)}
                        onEvent={e => {
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

                          if(currentStep >= 6){
                            setDisplayNone(true)
                          }
                        }}
                        primary
                        data={props}
                      />
                    </Row>
                  }
                </Row>
              </Row>
            </React.Fragment>
          }
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

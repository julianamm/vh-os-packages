import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Colors from '../../Colors'

const VHProgressBar = props => {
  const steps = new Array(props.steps).fill('');
    return (
      <Container fullWidth >
        <Row row >
          {
            steps.map(( step, index ) => {

              let borderRadius = '0 0 0 0'
              let color = Colors['gray-10']
              if (index === 0) {
                borderRadius = '6px 0 0 0'
              }

              if (index === (steps.length -1)) {
                borderRadius = '0 6px 0 0'
              }

              if ( index < (props.currentStep -1)) {
                color = Colors['blue']
              }

              if ( index === props.currentStep -1 ) {
                color = Colors['gray-30']
              }

              return (
                <span style={{
                  backgroundColor: color,
                  height:'10px',
                  width:'100%' ,
                  borderRadius,
                }} />
              )
            })
          }
        </Row>
      </Container>
    )

}

VHProgressBar.defaultProps = {
  className: "",
};

VHProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string,
  onEvent: PropTypes.func.isRequired
};

export default VHProgressBar

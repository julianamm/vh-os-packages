import React from 'react'
import { Row, Container } from '../../Grid'
import VHText from '../../Components/Text'
import VHButton from '../../Components/Button'
import PropTypes from 'prop-types'
import { Wrapper1 } from './styles'


const VHConfirmationTemplate = props => {
    return (
        <Wrapper1>
            <Container md >
                <Row >
                    <VHText text={props.title} variant="h2" color="white" />
                </Row>
                <Row marginTop={27}>
                    <VHText  text={props.subTitle} variant="h6" color="white" />
                </Row>
                <Row marginTop={27}>
                    <VHText  text={props.description} variant="h6" color="white" />
                </Row>
                {
                    props.cta && (
                        <Row marginTop={27}>
                            <VHButton
                                className=""
                                label={props.cta}
                                onEvent={props.onEvent}
                                primary
                                disabled={props.loading}
                            />
                        </Row>
                    )
                }
            </Container>
        </Wrapper1>
    )
}
VHConfirmationTemplate.defaultProps = {
}

VHConfirmationTemplate.propTypes = {
}

export default VHConfirmationTemplate

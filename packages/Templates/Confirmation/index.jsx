import React from 'react'
import { Row, Container } from '../../Grid'
import VHText from '../../Components/Text'
import VHButton from '../../Components/Button'
import PropTypes from 'prop-types'


const VHConfirmationTemplate = props => {
    return (
        <Container style={{width:'80%'}}>
            <Row alignItemsCenter marginTop={90}>
                <VHText text={props.title} variant="h4"/>
            </Row>
            <Row alignItemsCenter marginTop={39}>
                <VHText alignCenter text={props.description} variant="bodyweb"/>
            </Row>
            <Row alignItemsCenter marginTop={39}>
            <VHButton
                className=""
                label={props.ctaLabel}
                onEvent={props.onEvent}
                primary
                disabled={props.loading}
                />
            </Row>

        </Container>
    )
}
VHConfirmationTemplate.defaultProps = {
}

VHConfirmationTemplate.propTypes = {
}

export default VHConfirmationTemplate

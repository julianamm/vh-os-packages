import React from 'react'
import { Row, Container } from '../../Grid'
import VHText from '../../Components/Text'
import VHButton from '../../Components/Button'
import PropTypes from 'prop-types'
import { Wrapper1 } from './styles'
import cover from '../../../assets/covers/MaskGroup.png'

const VHAnnouncementTemplate = props => {
    return (
        <Wrapper1 cover={cover}>
            {/* <Container cover={cover}> */}
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
            {/* </Container> */}
        </Wrapper1>
    )
}
VHAnnouncementTemplate.defaultProps = {
}

VHAnnouncementTemplate.propTypes = {
}

export default VHAnnouncementTemplate

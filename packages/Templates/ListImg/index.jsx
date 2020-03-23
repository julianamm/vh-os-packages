import React from 'react'
import { Row, Container } from '../../Grid'
import VHText from '../../Components/Text'
import VHIconTitleList from '../../Components/IconTitleList'
import PropTypes from 'prop-types'
import { Wrapper1 } from './styles'
import cover from '../../assets/general/background/network-bg-white.png'

const VHAnnouncementTemplate = props => {
    return (
        <Wrapper1 cover={cover}>
            {/* <Container cover={cover}> */}
                <Container md >
                    <Row alignItemsCenter>
                        <Row marginBottom={10}>
                            <VHText variant={"h3"} color={"gray-90"} text={props.title1}/>
                        </Row>
                        <Row marginBottom={10}>
                            <VHIconTitleList
                                color="gray-90"
                                items={props.list1}
                                data="vanhack" />
                        </Row>
                    </Row>
                    <Row alignItemsCenter>
                        <Row marginBottom={10}>
                            <VHText variant={"h3"} color={"gray-90"} text={props.title2}/>
                        </Row>
                        <Row marginBottom={10}>
                            <VHIconTitleList
                                color="gray-90"
                                items={props.list2}
                                data="vanhack" />
                        </Row>
                    </Row>
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

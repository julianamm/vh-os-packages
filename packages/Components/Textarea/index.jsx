import React from 'react'
import PropTypes from "prop-types";
import VHText from '../Text'
import { Row } from '../../Grid'
import * as S from './styles'

const VHTextarea = props => {

    return (
        <Row className={`vh-textarea-description ${props.className ? props.className : ''}`}>
            <VHText color="gray-80" variant={'platform'} text="Description"/>
            <S.Textarea 
                data="data"
                type="textarea"
                value={props.description}
                placeholder={props.description}
                onEvent={props.onEvent}/>
        </Row>
    )

}
VHTextarea.defaultProps = {
    description: "",
    onEvent: null,
    className: "",
}

VHTextarea.propTypes = {
    description: PropTypes.string,
    onEvent: PropTypes.func,
    className: PropTypes.string,
}

export default VHTextarea

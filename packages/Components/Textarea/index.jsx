import React from 'react'
import PropTypes from "prop-types";
import VHText from '../Text'
import { Row } from '../../Grid'
import * as S from './styles'

const VHTextarea = props => {
    const [ value, setValue ] = React.useState(props.description)
    const handleChange = (event)  => {
        setValue(event.target.value)
    }

    return (
        <Row className={`vh-textarea-description ${props.className ? props.className : ''}`}>
            <VHText color="gray-80" variant={'platform'} text="Description"/>
            <S.Textarea 
                name="textarea"
                value={value}
                onChange={handleChange}
                onKeyUp={() =>  props.onEvent({
                    type: "onChange",
                    origin: "VHTextareaDescription",
                    props: {
                      data: props.description,
                      value: value
                    }
                  })}/>
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

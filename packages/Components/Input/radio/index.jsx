import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"
import VHText from '../../Text'
import VHInput from '../../Input/Simple'
import { Row } from '../../../Grid'
import { getFormatedDate } from '../../../util'

const VHInputRadio = props => {
    const [checked, setChecked] = useState(props.checked)

    const [value, setValue] = useState(props.value)

    React.useEffect(() => {
        setChecked(props.checked);
    }, [props.checked])


    return (
        <Row column alignItemsLeft className={`vh-radio ${props.className ? props.className : ''}`} >
            <Row marginBottom5>
                <VHText variant={props.variant} color={props.color} text={props.text} />
            </Row>
            <S.Wrapper>
                <S.Input
                    name={props.text}
                    id={'Yes'}
                    checked={checked}
                    disabled={props.disabled}
                    type="radio"
                    onClick={() => {
                        setChecked(true),
                            props.onEvent({
                                type: "OnClick",
                                origin: "VHInputRadio",
                                props: {
                                    data: props.data,
                                    checked: checked
                                }
                            })
                    }}
                />
                <S.Label for={props.text}>{'Yes'}</S.Label>
                <S.Input
                    name={props.text}
                    id={"No"}
                    checked={!checked}
                    disabled={props.disabled}
                    type="radio"
                    onClick={() => {
                        setChecked(false),
                            props.onEvent({
                                type: "OnClick",
                                origin: "VHInputRadio",
                                props: {
                                    data: props.data,
                                    checked: checked
                                }
                            })
                    }}
                />
                <S.Label for={props.text}>{'No'}</S.Label>
                {props.input && checked &&
                    <S.Container>
                        <VHInput maxLength={'4'} type="text" data={'passportExpirationDate'} pattern="([0-9]{2}[/]?){2}" placeholder={'Expiration: mm/yy'} value={value} onEvent={props.onEvent} />
                    </S.Container>
                }
            </S.Wrapper>
        </Row>
    )
}

VHInputRadio.defaultProps = {
    title: "",
    color: "gray-90",
    variant: "platform1",
    onEvent: null,
    data: null,
    checked: null,
    disabled: null,
    className: '',
}

VHInputRadio.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
    onEvent: PropTypes.func.isRequired,
    data: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

export default VHInputRadio

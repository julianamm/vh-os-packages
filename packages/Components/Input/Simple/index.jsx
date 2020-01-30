import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"

const VHInput = props => {
  const [value, handleChange] = React.useState('');
  return (
    <S.Input
      id={props.id}
      placeholder={props.placeholder}
      noBorder={props.noBorder}
      className={`vh-input ${props.className ? props.className : ''}`}
      disabled={props.disabled}
      type={props.type}
      autoFocus={props.autoFocus}
      onKeyUp={e => {
        if (e.key === "Enter") {
          props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onKeyUpAction",
            origin: "VHInput"
          })
        } else {
          handleChange(e.currentTarget.value)
          props.onEvent({
            data: {
              value: e.currentTarget.value,
              data: props.data
            },
            event: "onKeyUp",
            origin: "VHInput"
          })
        }
      }}

      onFocus={() => {
        props.onEvent({
          data: {
            value,
            data: props.data
          },
          event: "onFocus",
          origin: "VHInput"
        })
      }}

      onBlur={() => {
        props.onEvent({
          data: {
            value,
            data: props.data
          },
          event: "onBlur",
          origin: "VHInput"
        })
      }}
    />
  )
}

VHInput.defaultProps = {
  require: false,
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
}

VHInput.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

export default VHInput

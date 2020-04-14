import React from 'react'
import PropTypes from 'prop-types'
import A from './styles'

const VHLink = props => {
  return (
    <A
      cursor={props.cursor}
      xs={props.xs}
      sm={props.sm}
      lg={props.lg}
      reverse={props.reverse}
      onClick={() => {
        props.onEvent({
          type: "OnClick",
          origin: "VHLink",
          props: {
            data: props.data
          }
        })
      }}
      className={`vh-link-component ${props.className ? props.className : ''}`}
      href={props.to}
      color={props.color}
      noUnderscore={props.noUnderscore}
      white={props.white}
    >
      {props.label}
    </A>
  )
}


VHLink.defaultProps = {
  reverse: false,
  xs: false,
  sm: true,
  lg: false,
  noUnderscore: false,
}

VHLink.propTypes = {
  reverse: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  lg: PropTypes.bool,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.string
}


export default VHLink

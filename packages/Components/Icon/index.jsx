import React from 'react'
import PropTypes from 'prop-types'
let size = {
  w: 18,
  h: 18
}
let styles = {}

const VHIcon = props => {

  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      }
      break
    case props.sm:
      size = {
        w: 24,
        h: 24
      }
      break
    case props.md:
      size = {
        w: 36,
        h: 36
      }
      break
    case props.lg:
      size = {
        w: 48,
        h: 48
      }
      break
  }

    return (
      <img
        src={props.source}
        alt={props.title}
        title={props.title}
        width={size.w}
        height={size.h}
        style={styles}
        className={`vh-img ${props.className ? props.className : ''}`}
      />
    )

}

VHIcon.defaultProps = {
  className: '',
}
export const IconPropTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

VHIcon.propTypes = IconPropTypes

export default VHIcon

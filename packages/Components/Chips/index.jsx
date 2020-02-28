import React from 'react'
import PropTypes from 'prop-types'
import Button from './styles'

const VHChips = props => {
    return (
      <Button
        primary={props.primary}
        secondary={props.secondary}
        danger={props.danger}
        full={props.full}
        transparent={props.transparent}
        disabled={props.disabled}
        round={props.round}
        noHover={props.noHover}
        className={`vh-chip-component ${props.className ? props.className : ''}`}
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        marginRight={props.marginRight}
        type="button"
        onClick={() => {
          if (props.onEvent)
              props.onEvent({
                target: 'VHChips',
                event: 'onClick',
                data: {
                  label: props.label
                },
              })
        }}>
        {
          props.label
        }
      </Button>
    )

}

VHChips.defaultProps = {
  className: '',
}
export const IconPropTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

VHChips.propTypes = IconPropTypes

export default VHChips

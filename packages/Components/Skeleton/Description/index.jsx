import React from 'react'
import PropTypes from 'prop-types'
import Description from './styles'
import Color from '../../../Colors'

const VHSkeletonDescription = props => {
    let baseColor = Color["gray-30"]
    const shineColor = Color["gray-10"]
    if ( props.red ) {
        baseColor = Color["red-light"]
    }

    return (
        <Description  baseColor={baseColor}  shineColor={shineColor} />
    )
}
VHSkeletonDescription.defaultProps = {
}

VHSkeletonDescription.propTypes = {
}

export default VHSkeletonDescription

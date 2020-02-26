import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './styles'

import Color from '../../../Colors'

const VHSkeletonAvatar = props => {
    console.log(props)
    let baseColor = Color["gray-30"]
    const shineColor = Color["gray-10"]

    if ( props.red ) {
        baseColor = Color["red-light"]
    }
    if ( props.green ) {
        baseColor = Color["green-light"]
    }
    if ( props.blue ) {
        baseColor = Color["blue-light"]
    }
    if ( props.primary ) {
        baseColor = Color["primary"]
    }
    return (
        <Avatar baseColor={baseColor}  shineColor={shineColor} />
    )
}
VHSkeletonAvatar.defaultProps = {
}

VHSkeletonAvatar.propTypes = {
}

export default VHSkeletonAvatar

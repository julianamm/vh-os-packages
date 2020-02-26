import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './styles'

import Color from '../../../Colors'
let baseColor = Color["gray-30"]
const shineColor = Color["gray-10"]

const VHSkeletonAvatar = props => {
    console.log(props)

    if ( props.red ) {
        baseColor = Color["red-light"]
    }
    if ( props.green ) {
        baseColor = Color["green-light"]
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

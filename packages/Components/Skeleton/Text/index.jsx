import React from 'react'
import PropTypes from 'prop-types'
import Text from './styles'
import Color from '../../../Colors'

const VHSkeletonText = props => {
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
        baseColor = Color["primary-light"]
    }

    return (
        <Text  baseColor={baseColor}  shineColor={shineColor} />
    )
}
VHSkeletonText.defaultProps = {
}

VHSkeletonText.propTypes = {
}

export default VHSkeletonText

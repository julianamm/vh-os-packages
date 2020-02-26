import React from 'react'
import PropTypes from 'prop-types'
import Text from './styles'
import Color from '../../../Colors'
let baseColor = Color["gray-30"]
const shineColor = Color["gray-10"]

const VHSkeletonText = props => {
    console.log(props)
    if ( props.red ) {
        baseColor = Color["red-light"]
    }
    if ( props.green ) {
        baseColor = Color["green-light"]
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

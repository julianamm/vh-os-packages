import React from 'react'
import PropTypes from 'prop-types'
import Description from './styles'
import Color from '../../../Colors'
import { DescriptionSkeleton } from 'react-preload-skeleton'

const VHSkeletonDescription = props => {
    return (
        <DescriptionSkeleton color={props.color}/>
    )
}
VHSkeletonDescription.defaultProps = {
}

VHSkeletonDescription.propTypes = {
}

export default VHSkeletonDescription

import React from 'react'
import PropTypes from 'prop-types'
import { AvatarSkeleton } from 'react-preload-skeleton'

const VHSkeletonAvatar = props => {
    return (
        <AvatarSkeleton color={props.color} />
    )
}
VHSkeletonAvatar.defaultProps = {
}

VHSkeletonAvatar.propTypes = {
}

export default VHSkeletonAvatar

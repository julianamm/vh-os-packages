import React from 'react'
import PropTypes from 'prop-types'
import Text from './styles'
import Color from '../../../Colors'
import { TextSkeleton }  from 'react-preload-skeleton'

const VHSkeletonText = props => {

    return (
        <TextSkeleton color={props.color}/>
    )
}
VHSkeletonText.defaultProps = {
}

VHSkeletonText.propTypes = {
}

export default VHSkeletonText

import React from 'react'
import PropTypes from 'prop-types'

const VHMediaSource = props => {
  if (props.youtube) {
    const autoplay = props.autoplay ? '?autoplay=1;' : '';
    console.log(`${props.source}${autoplay}`)
    return (
      <iframe
        style={{borderRadius: "4px"}}
        width={props.width}
        height={props.height}
        src={`${props.source}${autoplay}`}
        frameborder="0"
        className={`vh-media-youtube-component ${props.className ? props.className : ''}`}
        allow={`accelerometer; encrypted-media; gyroscope; picture-in-picture;`}
        allowfullscreen></iframe>
    )
  }
  return  (
      <video
        style={{borderRadius: "4px"}}
        controls={props.controls}
        width={props.width}
        height={props.height}
        className={`vh-media-source-component ${props.className ? props.className : ''}`}
        poster={props.poster}
      >
        <source src={props.source} type={props.type} />
      </video>
  )
}

VHMediaSource.defaultProps = {
  controls: null,
  className: '',
}

VHMediaSource.propTypes = {
  controls: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default VHMediaSource



import { Component } from 'react'
import { goToAnchor, removeHash, configureAnchors } from 'react-scrollable-anchor'
import PropTypes from 'prop-types'

class VHPageSection extends Component {

  componentDidMount() {
    configureAnchors({ offset: -80, scrollDuration: 1000, keepLastAnchorHash: false })
    removeHash()
  }

  render() {
    return this.props.content
  }
}
VHPageSection.propTypes = {
  content: PropTypes.node.isRequired
}

export default VHPageSection
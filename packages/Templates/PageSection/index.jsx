import {Component} from 'react'

import PropTypes from 'prop-types'

class VHPageSection extends Component {
    render() {
      return this.props.content
    }
 }
 VHPageSection.propTypes = {
   content: PropTypes.node.isRequired
 }

 export default VHPageSection
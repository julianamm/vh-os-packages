import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import VHAvatar from '../Avatar/index';
import VHText from '../Text/index';

const VHTestimonial = props => {
  return (
    <Row row>
      <VHAvatar 
        image={props.image} 
        size={props.size}
      />
      <Row style={{margin: "6px 10px"}}>
        <VHText 
          variant="platform"
          color="gray-90"
          text={props.testimonial}
        />
      </Row>
    </Row>
  )
}

VHTestimonial.defaultProps = {
  className: '',
}

VHTestimonial.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
  testimonial: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default VHTestimonial;

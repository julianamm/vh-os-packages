import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid/index";
import VHTextsImageLink from "../../../Components/TextsImageLink";
import VHTextsImageTestimonial from "../../../Components/TextsImageTestimonial";

const VHPremiumServicesSection = props => {
  return (
    <React.Fragment>
        <VHTextsImageLink 
            title={props.title}
            highlight={props.highlight}
            description={props.description}
            image={props.image}
            reverseTop={false}
            smLabel
            label={props.label}
            to={props.to}
            color={"gray-90"}
            source={props.source}
            smImg
            reverseBottom={false}
        />
        {props.premiumOtherServices.map(service => (
            <Row marginTop={120}>
                <VHTextsImageTestimonial 
                    title={service.title}
                    highlight={service.highlight}
                    description={service.description}
                    image={service.image}
                    reverseTop={service.reverseTop}
                    avatar={service.avatar}
                    sizeAvatar={"md"}
                    testimonial={service.testimonial}
                    color={"gray-90"}
                    reverseBottom={service.reverseBottom}
                />
            </Row>
        ))}
    </React.Fragment>
 )
}

VHPremiumServicesSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reverseTop: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string,
  smLabel: PropTypes.bool,
  source: PropTypes.string,
  color: PropTypes.string,
  avatar: PropTypes.string,
  sizeAvatar: PropTypes.string,
  avatar: PropTypes.string,
  testimonial: PropTypes.string,
  reverseBottom: PropTypes.bool,
  premiumOtherServices: PropTypes.array,
}

export default VHPremiumServicesSection;
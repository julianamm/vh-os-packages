import React from 'react';
import PropTypes from 'prop-types';
import VHTitleHighlightDescriptionButtonImage from "../../../Components/TitleHighlightDescriptionButtonImage/index";
import VHCardFeatures from "../../../Components/Cards/Features/index";

const VHPremiumIntroSection = props => {
  return (
    <React.Fragment>
        <VHTitleHighlightDescriptionButtonImage 
            title={props.title}
            highlight={props.highlight}
            description={props.description}
            label={props.label}
            image={props.image}
            onEvent={props.onEvent}
            data={"VHTitleHighlightDescriptionButtonImage"}
        />
        <VHCardFeatures 
            features={props.features}
        />
    </React.Fragment>
 )
}

VHPremiumIntroSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  features: PropTypes.string,
}

export default VHPremiumIntroSection;
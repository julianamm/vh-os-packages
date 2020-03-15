import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHTitleHighlightDescriptionButtonImage from "../../Components/TitleHighlightDescriptionButtonImage/index";
import VHFeaturesCard from "../../Components/FeaturesCard/index";

const VHPremiumIntroSection = props => {
  return (
    <React.Fragment>
        <VHTitleHighlightDescriptionButtonImage 
            title={props.title}
            highlight={props.highlight}
            description={props.description}
            label={props.label}
            image={props.image}
        />
        <VHFeaturesCard 
            icon1={props.icon1}
            title1={props.title1}
            description1={props.description1}
            icon2={props.icon2}
            title2={props.title2}
            description2={props.description2}
            icon3={props.icon3}
            title3={props.title3}
            description3={props.description3}  
        />
    </React.Fragment>
  )
}

VHPremiumIntroSection.propTypes = {
//   onEvent: PropTypes.func,
//   data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   className: PropTypes.string
}

export default VHPremiumIntroSection;

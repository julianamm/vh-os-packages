import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from '../../Grid';
import VHPremiumIntroSection from '../../Sections/Premium/Intro/index';
import VHPremiumServicesSection from '../../Sections/Premium/Services/index';
import VHPremiumPricingSection from '../../Sections/Premium/Pricing/index';
import VHPremiumHiredSection from '../../Sections/Premium/Hired/index';
import VHPremiumFaqSection from '../../Sections/Premium/Faq/index';

const VHPremiumTemplate = props => (
  <Container>
    <Row marginBottom={10} style={{ backgroundColor: "#f2f8fc", height: "100vh", padding: "24px" }}>
        <VHPremiumIntroSection
            title={props.intro.items.title}
            highlight={props.intro.items.highlight}
            description={props.intro.items.description}
            label={props.intro.items.label}
            image={props.intro.items.image}
            features={props.intro.features}
            onEvent={props.onEvent}
        />
    </Row>
    {/* <Row marginBottom={10}>
      <VHPremiumServicesSection
      />
    </Row>
    <Row marginBottom={10}>
      <VHPremiumPricingSection
      />
    </Row>
    <Row marginBottom={10}>
      <VHPremiumHiredSection
      />
    </Row>
    <Row marginBottom={10}>
      <VHPremiumFaqSection
      />
    </Row> */}
  </Container>
)

VHPremiumTemplate.defaultProps = {
}

VHPremiumTemplate.propTypes = {
}

export default VHPremiumTemplate;

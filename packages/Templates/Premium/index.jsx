import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from '../../Grid';
import VHPremiumIntroSection from '../../Sections/Premium/Intro/index';
import VHPremiumServicesSection from '../../Sections/Premium/Services/index';
import VHPremiumPricingSection from '../../Sections/Premium/Pricing/index';
import VHPremiumSuccessCasesSection from '../../Sections/Premium/SuccessCases/index';
import VHPremiumHiredSection from '../../Sections/Premium/Hired/index';
import VHPremiumFaqSection from '../../Sections/Premium/Faq/index';

const VHPremiumTemplate = props => (
  <Container>
    <Row style={{ backgroundColor: "#f2f8fc", height: "100vh", padding: "20px 0 40px 0" }}>
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
    <Row style={{ backgroundColor: "#fffffff", padding: "270px 0 150px 0" }}>
      <VHPremiumServicesSection
        sectionTitle="How Does Premium Work"
        title={props.services.interviewClass.title}
        highlight={props.services.interviewClass.highlight}
        description={props.services.interviewClass.description}
        imgSvg={props.services.interviewClass.imgSvg}
        label={props.services.interviewClass.label}
        to={props.services.interviewClass.to}
        icon={props.services.interviewClass.icon}
        premiumOtherServices={props.services.otherServices}
        onEvent={props.onEvent}
      />
    </Row>
    <Row style={{ backgroundColor: "rgba(203, 248, 251, 0.44)", height: "100vh", padding: "50px 0 20px 0" }}>
      <VHPremiumPricingSection
        sectionTitle="Pricing"
        icon="medal"
        title="30 Days Money Back Guarantee"
        description="If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked."
        cardItems={props.pricing.cardItems}
        onEvent={props.onEvent}
      />
    </Row>
    <Row style={{ backgroundColor: "#ffffff", padding: "50px 0 150px 0" }}>
      <VHPremiumSuccessCasesSection
        sectionTitle={props.success.items.sectionTitle}
        title={props.success.items.title}
        highlight={props.success.items.highlight}
        imgBackgroundCards={props.success.items.imgBackgroundCards}
        cardLeftTitle={props.success.items.cardLeft.title}
        cardLeftDescription={props.success.items.cardLeft.description}
        cardRightTitle={props.success.items.cardRight.title}
        cardRightDescription={props.success.items.cardRight.description}
        imgVideo={props.success.items.imgVideo}
        iconVideo={props.success.items.iconVideo}
        videoDescription={props.success.items.videoDescription}
        label={props.success.items.label}
        to={props.success.items.to}
        iconLink={props.success.items.iconLink}
        onEvent={props.onEvent}
      />
    </Row>
    <Row style={{ backgroundColor: "#ffffff", height: "100vh", padding: "50px 0" }}>
      <VHPremiumHiredSection
        sectionTitle="Premium Vanhackers hired"
        btnLabel="JOIN VANHACK PREMIUM"
        candidates={props.hired.candidates}
        onEvent={props.onEvent}
        data={"VHPremiumHiredSection"}
      />
    </Row>
    <Row style={{ backgroundColor: "#f2f6f9", height: "100vh", padding: "50px 0" }}>
      <VHPremiumFaqSection
        sectionTitle="Frequently Asking Questions"
        title="Have questions about VanHack Premium?"
        description="Give us your email and we’ll get in touch."
        imgSvg="meeting"
        faqs={props.faq.faqs}
        onEvent={props.onEvent}
      />
    </Row>
  </Container>
)

VHPremiumTemplate.defaultProps = {
}

VHPremiumTemplate.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default VHPremiumTemplate;

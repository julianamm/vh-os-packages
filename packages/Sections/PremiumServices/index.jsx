import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHText from '../../Components/Text';
import VHTextHighlightDescriptionImage from "../../Components/TextHighlightDescriptionImage/index";
import VHLinkImage from "../../Hyperlinks/LinkImage/index";
import VHTestimonial from "../../Components/Testimonial/index";

import premiumInterview from "../../../assets/images/img_premium_interview.svg";
import premiumProfile from "../../../assets/images/img_premium_profile.svg";
import premiumSlack from "../../../assets/images/img_premium_slack.svg";
import premiumWebinars from "../../../assets/images/img_premium_webinars.svg";
import iconArrowRight from "../../../assets/icons/icon_arrow_right.svg";

const VHPremiumServicesSection = props => {
  return (
    <React.Fragment>
        <Container>
            <Row>
                <Row alignItemsCenter marginBottom={40}>
                    <VHText 
                        variant="h3"
                        color="gray-90"
                        text="How Does Premium Work"
                    />
                </Row>
                <Row>
                    <VHTextHighlightDescriptionImage
                        title="INTERVIEW CLASSES"
                        highlight="Learn how to ace an interview and improve your English skills at the same time"
                        description="Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience."
                        image={premiumInterview}
                    />
                    <VHLinkImage
                        to={"#"}
                        xsImg
                        xsLabel
                        label="watch a class"
                        title="interview class"
                        source={iconArrowRight}
                    />
                </Row>
                <Row width={"100%"}>
                    <VHTextHighlightDescriptionImage
                        title="PROFILE REVIEW"
                        highlight="Have experts review your VanHack profile - improve all your profiles at once"
                        description="All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired"
                        image={premiumProfile}
                        reverse
                    />
                    <VHTestimonial
                        image={props.image}
                        testimonial='”The preparation provided made a huge difference in my success” - Marco Teixeira'
                    />
                </Row>
                <Row>
                    <VHTextHighlightDescriptionImage
                        title="PREMIUM SLACK GROUP"
                        highlight="Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members"
                        description="Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest"
                        image={premiumSlack}
                    />
                    <VHTestimonial
                        image={props.image}
                        testimonial='”All their tips were very valuable!” - Shara Shami Araujo Alves'
                    />
                </Row>
                <Row width={"100%"}>
                    <VHTextHighlightDescriptionImage
                        title="LIVE EXCLUSIVE WEBINARS"
                        highlight="CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions."
                        description="Get access to real experts and learn from them. There’s nothing quite like a live Questions and Answers session with someone who’s been there and done that. "
                        image={premiumWebinars}
                        reverse
                    />
                    <Container>
                        <VHTestimonial
                            image={props.image}
                            testimonial='”It was the best decision ever!” - Marcelo Blaz'
                        />
                    </Container>
                </Row>
            </Row>
        </Container>
    </React.Fragment>
  )
}

VHPremiumServicesSection.propTypes = {
//   onEvent: PropTypes.func,
//   data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   className: PropTypes.string
}

export default VHPremiumServicesSection;

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardPricing from "../../Components/Cards/Pricing/index";
import VHText from  "../../Components/Text/index";
import VHImg from "../../Components/Img/index";

import iconMedal from "../../../assets/icons/icon_medal.svg";

const VHPremiumIntroSection = props => {
  return (
    <React.Fragment>
        <Container alignItemsCenter>
            <VHText 
                variant="h4"
                color="tertiary-dark"
                text="Pricing"
            />
            <Row row width={"100%"} marginTop={50} marginBottom={15}>
                <Row style={{width: "360px", height: "420px !important", marginRight: "30px"}}>
                    <VHCardPricing 
                        period="Month"
                        price="65"
                        unit="CAD$/month"
                        subscription="Renew every month"
                        cta="Get Started"
                        outlineBtn
                        note=""
                        onEvent={(event) => console.log(event)}
                    />
                </Row>
                <Row style={{width: "360px", height: "420px !important", marginRight: "30px"}}>
                    <VHCardPricing 
                        show
                        save="Save 15%"
                        noHoverChip
                        transparentChip
                        period="Quarter"
                        price="55"
                        unit="CAD$/month"
                        subscription="Renew every 3 months"
                        cta="Get Started"
                        outlineBtn
                        note=""
                        onEvent={(event) => console.log(event)}   
                    />
                </Row>
                <Row style={{width: "360px", height: "420px !important"}}>
                    <VHCardPricing 
                        show
                        save="Save almost 25%"
                        noHoverChip
                        transparentChip
                        round
                        period="Semester"
                        price="50"
                        unit="CAD$/month"
                        subscription="Renew every 6 months"
                        cta="Get Started"
                        secondaryBtn
                        note="The choice of 46% of premium members"
                        onEvent={(event) => console.log(event)}
                    />
                </Row>
            </Row>
            <Row alignItemsCenter>
                <Row alignItemsCenter>
                    <VHImg 
                        md
                        source={iconMedal}
                        title="icon"
                    />
                </Row>
                <Row row marginTop={20} marginBottom={2} style={{ justifyContent: "center"}}>
                    <VHText 
                        variant="h4"
                        color="gray-80"
                        text="30 Days Money Back Guarantee"
                    />
                </Row>
                <Row width={"70%"} style={{ textAlign: "center", justifyContent: "center"}}>
                    <VHText 
                        variant="platform"
                        color="gray-80"
                        text="If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked."
                    />
                </Row>
            </Row>
        </Container>
    </React.Fragment>
  )
}

VHPremiumIntroSection.propTypes = {
    // onEvent: PropTypes.func,
    // data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    // className: PropTypes.string
}

export default VHPremiumIntroSection;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from "../../../Grid/index";
import VHText from "../../../Components/Text/index";
import VHTextHighlightDescriptionImage from "../../../Components/TextHighlightDescriptionImage/index";
import VHImgCardsOverlay from "../../../Components/ImgCardsOverlay/index";
import VHImgVideoIconText from  "../../../Components/ImgVideoIconText/index";
import VHLinkImage from "../../../Hyperlinks/LinkImage/index";

const VHPremiumSuccessCasesSection = props => {
  return (
    <React.Fragment>
        <Container>
            <Row alignItemsCenter marginBottom={40}>
                <VHText
                    variant={"h2"}
                    color={"gray-100"}
                    text={props.sectionTitle}
                />
            </Row>
            <Row row responsive>
                <Row alignItemsCenter>
                    <Row>
                        <VHTextHighlightDescriptionImage 
                            title={props.title}
                            highlight={props.highlight}
                        />
                    </Row>
                    <Row>
                        <VHImgCardsOverlay 
                            image={props.imgBackgroundCards}
                            cardLeftTitle={props.cardLeftTitle}
                            cardLeftDescription={props.cardLeftDescription}
                            cardRightTitle={props.cardRightTitle}
                            cardRightDescription={props.cardRightDescription}
                        />
                    </Row>
                </Row>
                <Row  alignItemsCenter>
                    <Row marginBottom={8} marginTop={50}>
                        <VHImgVideoIconText 
                            image={props.imgVideo}
                            icon={props.icon}
                            text={props.videoDescription}
                        />
                    </Row>
                    <Row>
                        <VHLinkImage                   
                            lgLabel
                            label={props.label}
                            to={props.to}
                            source={props.linkIcon}
                            // title={props.label}
                            smImg
                        />
                    </Row>
                </Row>
            </Row>
        </Container>
    </React.Fragment>
 )
}

VHPremiumSuccessCasesSection.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    sectionTitle: PropTypes.string,
    title: PropTypes.string,
    highlight: PropTypes.string,
    imgBackgroundCards: PropTypes.string,
    cardLeftTitle: PropTypes.string,
    cardLeftDescription: PropTypes.string,
    cardRightTitle: PropTypes.string,
    cardRightDescription: PropTypes.string,
    imgVideo: PropTypes.string,
    icon: PropTypes.string,
    videoDescription: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string,
    linkIcon: PropTypes.string,
}

export default VHPremiumSuccessCasesSection;
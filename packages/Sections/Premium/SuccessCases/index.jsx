import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from "../../../Grid/index";
import VHText from "../../../Components/Text/index";
import VHTextHighlightDescriptionImage from "../../../Components/TextHighlightDescriptionImage/index";
import VHImgCardsOverlay from "../../../Components/ImgCardsOverlay/index";
import VHImgVideoIconText from  "../../../Components/ImgVideoIconText/index";
import VHMediaSource from  "../../../Components/MediaSource/index";
import VHLinkImage from "../../../Hyperlinks/LinkImage/index";
import * as S from './styles';

const VHPremiumSuccessCasesSection = props => {
  return (
    <React.Fragment>
        <Container>
            <Row alignItemsCenter marginBottom={20}>
                <VHText
                    variant={"h2"}
                    color={"gray-100"}
                    text={props.sectionTitle}
                />
            </Row>
            <Row row responsive>
                <Row alignItemsCenter>
                    <Row mobileDisplayNone>
                        <VHTextHighlightDescriptionImage 
                            title={props.title}
                            highlight={props.highlight}
                        />
                    </Row>
                    <Row>
                        <VHImgCardsOverlay 
                            imgSvg={props.imgBackgroundCards}
                            cardLeftTitle={props.cardLeftTitle}
                            cardLeftDescription={props.cardLeftDescription}
                            cardRightTitle={props.cardRightTitle}
                            cardRightDescription={props.cardRightDescription}
                        />
                    </Row>
                </Row>
                <Row  alignItemsCenter>
                    <Row marginBottom={8} marginTop={50} alignItemsCenter>
                        <S.Wrapper responsive className="test">
                            <VHMediaSource 
                                source={props.source}
                                youtube
                                controls={props.control}
                                poster={props.poster}
                                width={"100%"}
                                height={"100%"}
                            />
                        </S.Wrapper>
                    </Row>
                    <Row>
                        <VHLinkImage                   
                            lgLabel
                            label={props.label}
                            to={props.to}
                            icon={props.iconLink}
                            smIcon
                            reverse
                            onEvent={props.onEvent}
                            data={"VHLinkImage"}
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
    controls: PropTypes.bool,
    youtube: PropTypes.bool,
    source: PropTypes.string,
    poster: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,

    label: PropTypes.string,
    to: PropTypes.string,
    iconLink: PropTypes.string,
}

export default VHPremiumSuccessCasesSection;
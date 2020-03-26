import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid/index";
import VHText from "../../../Components/Text/index";
import VHTitleDescriptionImage from "../../../Components/TitleDescriptionImage/index";
import VHInputSimpleWithButton from  "../../../Components/Input/SimpleWithButton/index";


const VHPremiumFaqSection = props => {
  return (
    <React.Fragment>
        <Row alignItemsCenter marginBottom={40}>
            <VHText
                variant={"h2"}
                color={"gray-100"}
                text={props.sectionTitle}
            />
        </Row>
        <Row row responsive>
            <Row width={"50%"} alignItemsCenter>
                <Row width={"80%"}>
                    <Row marginBottom={12} style={{ marginLeft: "30px" }}>
                        <VHTitleDescriptionImage
                            titleColor={"gray-100"}
                            descriptionColor={"black-70"}
                            titleVariant={"h4"}
                            descriptionVariant={"h6"}
                            title={props.title}
                            description={props.description}
                            image={props.image}
                        />
                    </Row>
                    <Row style={{ backgroundColor: "#ffffff"}}>
                        <VHInputSimpleWithButton
                            placeholder={"E-mail"}
                            label={"SEND"}
                        />
                    </Row>
                </Row>
            </Row>
            <Row width={"50%"}>
                {props.faqs.map(faq => (
                    <Row width={"80%"} alignItemsCenter marginBottom={20} style={{marginLeft: "20px"}}>
                        <Row marginBottom={3}>
                            <VHText
                                variant={"h4"}
                                color={"gray-90"}
                                text={faq.question}
                            />
                        </Row>
                        <Row>
                            <VHText
                                variant={"h6"}
                                color={"gray-90"}
                                text={faq.answer}
                            />
                        </Row>
                    </Row>
                ))}
            </Row>
        </Row>
    </React.Fragment>
 )
}

VHPremiumFaqSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  sectionTitle: PropTypes.string,

  question: PropTypes.string,
  answer: PropTypes.string,
}

export default VHPremiumFaqSection;
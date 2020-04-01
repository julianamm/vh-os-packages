import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from "../../../Grid/index";
import VHText from "../../../Components/Text/index";
import VHTitleDescriptionImage from "../../../Components/TitleDescriptionImage/index";
import VHInputSimpleWithButton from  "../../../Components/Input/SimpleWithButton/index";

const VHPremiumFaqSection = props => {
    console.log(props.assigned)
  return (
    <React.Fragment>
        <Row alignItemsCenter marginBottom={20} style={{textAlign: "center"}}>
            <VHText
                variant={"h2"}
                color={"gray-100"}
                text={props.sectionTitle}
            />
        </Row>
        <Row row responsive>
            <Row width={"50%"} alignItemsCenter>
                <Row width={"80%"} alignItemsCenter>
                    <Row marginBottom={12} style={{ marginLeft: "30px" }} mobileTxtCenter>
                        <VHTitleDescriptionImage
                            title={props.title}
                            description={props.description}
                            imgSvg={"meeting"}
                        />
                    </Row>
                    {props.assigned &&  
                        <Row marginBottom={12}>
                            <VHText 
                                variant={"h6"}
                                color={"gray-90"}
                                text={props.text}
                            />
                        </Row>
                    }
                    {!props.assigned &&
                        
                        <Row marginBottom={6} style={{ backgroundColor: "#ffffff"}}>
                            <VHInputSimpleWithButton
                                placeholder={"E-mail"}
                                label={"SEND"}
                                onEvent={props.onEvent}
                                data={"VHInputSimpleWithButton"}
                            />
                        </Row>
                    }
                </Row>
            </Row>
            <Row width={"50%"} alignItemsCenter>
                {props.faqs.map(faq => (
                    <Row width={"80%"} alignItemsCenter marginBottom={8} style={{ padding: "20px" }} mobileTxtCenter>
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
  title: PropTypes.string,
  description: PropTypes.string,
  imgSvg: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default VHPremiumFaqSection;
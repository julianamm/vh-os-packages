import React from 'react';
import PropTypes from "prop-types";
import { Row, Container } from '../../Grid';
import VHText from '../Text/index';
import VHCardBase from '../Cards/Base/index';
import VHButton from '../Button/index';
import * as S from './styles';


const VHPromoBar = props => {

    return (
        <Row className={`vh-promo-bar ${props.className ? props.className : ''}`}>
            <S.Wrapper color={"red"}>
                <Container md>
                    <Row row style={{ marginTop: "6px" }}>
                        <Row row alignItemsCenter mobileDisplayNone>
                            <span style={{ marginRight: "3px"}}>
                                <VHText 
                                    variant={"subtitle2"}
                                    color={"gray-10"}
                                    text={"Special Offer:"}
                                />
                            </span>
                            <VHText 
                                variant={"subtitle3"}
                                color={"gray-10"}
                                text={props.textPromo}
                            />
                            <span style={{ marginLeft: "22px"}}>
                                <VHText
                                    variant={"subtitle3"}
                                    color={"gray-10"}
                                    text={"Sale ends in"}
                                />
                            </span>
                        </Row>
                        <Row row justifyBottom>
                            <Row row alignItemsCenter>
                                <Row marginRight={1} marginLeft={2}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={props.numDays}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text={props.days}
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                                <Row marginRight={1}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={props.numHours}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text={props.hours}
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                                <Row marginRight={1}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={props.numMin}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text={props.min}
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                                <Row marginRight={3}>
                                    <VHCardBase noHover>
                                        <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                                            <VHText 
                                                variant={"h4"}
                                                color={"black-90"}
                                                text={props.numSec}
                                            />
                                            <VHText 
                                                variant={"caption"}
                                                color={"gray-40"}
                                                text={props.sec}
                                            />
                                        </Row>
                                    </VHCardBase>
                                </Row>
                            </Row>
                            <Row row alignItemsCenter marginRight={1}>
                                <Row width={"100px"}>
                                    <VHButton 
                                        label={props.label}
                                        full
                                        lg
                                        onEvent={props.onEvent}
                                        data={"VHPromoBar"}
                                    />
                                </Row>
                            </Row>
                            <Row row alignItemsCenter justifyBottom style={{  cursor: "pointer"}} mobileDisplayNone>
                                <VHText 
                                    variant={"subtitle3"}
                                    color={"gray-10"}
                                    text={"Dismiss"}
                                    onClick={props.onClick}
                                />
                            </Row>
                        </Row>
                    </Row>
                </Container>
            </S.Wrapper>
        </Row>
    )

}
VHPromoBar.defaultProps = {
    onEvent: null,
    className: "",
}

VHPromoBar.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.string,
}

export default VHPromoBar;

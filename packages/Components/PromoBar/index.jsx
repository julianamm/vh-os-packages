import React from 'react';
import PropTypes from "prop-types";
import { Row, Container } from '../../Grid';
import VHText from '../Text/index';
import VHButton from '../Button/index';
import VHTimer from '../Timer/index';
import * as S from './styles';

const VHPromoBar = props => {
    return (
        <Row className={`vh-promo-bar ${props.className ? props.className : ''}`}>
            <S.Wrapper color={props.backgroundColor ? props.backgroundColor : 'gray-30'}>
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
                            <VHTimer
                                endDate={ props.endDate }
                            />
                            <Row row alignItemsCenter marginRight={1}>
                                <Row width={"100px"}>
                                    <VHButton 
                                        label={props.label}
                                        full
                                        lg
                                        onEvent={props.onEvent}
                                        data={"VHPromoBar"}
                                        black
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

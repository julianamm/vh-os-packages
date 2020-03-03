import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHCardBase from "../Cards/Base/index";
import * as S from './styles'

const VHMediacontactCard = props => {

    return (
        <Row style={{ marginTop:"-10%", boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)", borderRadius: "6px"}}>
            <VHCardBase noHover>
                <Row >
                    <S.Title>{props.title}</S.Title>
                    <S.Info>{props.name}</S.Info>
                    <S.Info>{props.email}</S.Info>
                    <S.Info>{props.phone}</S.Info>
                </Row>
            </VHCardBase>

        </Row>
    )
}

VHMediacontactCard.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    className: PropTypes.string
};

export default VHMediacontactCard;

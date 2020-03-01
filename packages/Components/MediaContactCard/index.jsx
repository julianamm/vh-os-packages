import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHCardBase from "../Cards/Base/index";
import * as S from './styles'

const VHMediacontactCard = props => {

    return (
            <VHCardBase noHover>
                <Row >
                    <S.Title>{props.title}</S.Title>
                    <S.Info>{props.name}</S.Info>
                    <S.Info>{props.email}</S.Info>
                    <S.Info>{props.phone}</S.Info>
                </Row>
            </VHCardBase>
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

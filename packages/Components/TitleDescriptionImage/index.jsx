import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import VHTitleDescription from "../TitleDescription/index";
import * as S from './styles';

const VHTitleDescriptionImage = props => {
    return (
        <Row row>
            <Row>
                <VHTitleDescription 
                    titleColor={props.titleColor}
                    descriptionColor={props.descriptionColor}
                    titleVariant={props.titleVariant}
                    descriptionVariant={props.descriptionVariant}
                    title={props.title}
                    description={props.description}
                />
            </Row>
            <Row>
                <S.ImgWrapper image={props.image}/>
            </Row>
        </Row>
    )
}

VHTitleDescriptionImage.defaultProps = {
    className: '',
}

VHTitleDescriptionImage.prototypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func,
    data: PropTypes.object,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string,
    titleVariant: PropTypes.string,
    descriptionVariant: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default VHTitleDescriptionImage;
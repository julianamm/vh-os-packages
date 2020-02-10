import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid";
import * as Title from './styles';

const VHMainTitleDescription = props => {
    const initialState = { className: 'vh-title-component' }

    return (
        <Row>
            <Row row style={{height:30}}>
                <Title.Subtitle1 
                    color={props.color}
                    className={`${initialState.className} 
                    ${props.className ? props.className : ''}`}
                    >{props.title}
                </Title.Subtitle1>
                {props.rightTitle ? 
                <Title.Platform1 
                    color={props.color}
                    className={`${initialState.className} 
                    ${props.className ? props.className : ''}`}
                    >{props.rightTitle}
                </Title.Platform1> : null }
            </Row>
            <Row>
                <Title.Caption 
                    color={props.color}
                    className={`${initialState.className} 
                    ${props.className ? props.className : ''}`}
                    >{props.description}
                </Title.Caption>
            </Row>
        </Row>
    )
}

VHMainTitleDescription.propTypes = {
    title: PropTypes.string.isRequired
}

export default VHMainTitleDescription;

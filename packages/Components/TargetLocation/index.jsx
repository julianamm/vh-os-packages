import React, { useState } from 'react'
import PropTypes from "prop-types";
import VHImg from '../Img/index'
import VHText from '../Text/index'
import { Row } from '../../Grid'
import * as S from './styles'
import USA from '../../../assets/flags/flag_usa.svg'
import Canada from '../../../assets/flags/flag_canada.svg'
import Germany from '../../../assets/flags/flag_germany.svg'
import Ireland from '../../../assets/flags/flag_ireland.svg'
import Netherlands from '../../../assets/flags/flag_netherlands.svg'
import UK from '../../../assets/flags/flag_uk.svg'

const VHTargetLocation = props => {

    const [canada, setCanada] = useState(false);
    const [germany, setGermany] = useState(false);
    const [ireland, setIreland] = useState(false);
    const [netherlands, setNetherlands] = useState(false);
    const [uk, setUk] = useState(false);
    const [usa, setUsa] = useState(false);

    return (
        <Row className={`vh-target-location ${props.className ? props.className : ''}`} row justifySpaceBetween>
            <S.Wrapper disabled={canada} onClick={() => {
                setCanada(!canada)
            }}>
                <VHImg source={Canada} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Canada'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={germany} onClick={() => {
                setGermany(!germany)
            }}>
                <VHImg source={Germany} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Germany'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={ireland} onClick={() => {
                setIreland(!ireland)
            }}>
                <VHImg source={Ireland} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Ireland'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={netherlands} onClick={() => {
                setNetherlands(!netherlands)
            }}>
                <VHImg source={Netherlands} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Netherlands'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={uk} onClick={() => {
                setUk(!uk)
            }}>
                <VHImg source={UK} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'U.K'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={usa} onClick={() => {
                setUsa(!usa)
            }}>
                <VHImg source={USA} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'U.S.A'}
                />
            </S.Wrapper>
        </Row>
    )

}
VHTargetLocation.defaultProps = {
    description: "",
    onEvent: null,
    className: "",
}

VHTargetLocation.propTypes = {
    description: PropTypes.string,
    onEvent: PropTypes.func,
    className: PropTypes.string,
}

export default VHTargetLocation

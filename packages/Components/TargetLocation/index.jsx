import React, { useState } from 'react';
import PropTypes from "prop-types";
import VHIcon from '../Icon/index';
import VHText from '../Text/index';
import { Row } from '../../Grid';
import * as S from './styles';


const VHTargetLocation = props => {

    const items = Object.keys(props.items).length > 0 ? props.items : [{ status: false }, { status: false }, { status: false }, { status: false }, { status: false }, { status: false }]
    const [canada, setCanada] = useState(items[0].status);
    const [germany, setGermany] = useState(items[1].status);
    const [ireland, setIreland] = useState(items[2].status);
    const [netherlands, setNetherlands] = useState(items[3].status);
    const [uk, setUk] = useState(items[4].status);
    const [usa, setUsa] = useState(items[5].status);

    React.useEffect(() => {
        setCanada(items[0].status),
            setGermany(items[1].status),
            setIreland(items[2].status),
            setNetherlands(items[3].status),
            setUk(items[4].status),
            setUsa(items[5].status)
    },
        [items[0].status,
        items[1].status,
        items[2].status,
        items[3].status,
        items[4].status,
        items[5].status])

    return (
        <Row justifySpaceBetween row className={`vh-target-location ${props.className ? props.className : ''}`} row justifySpaceBetween>
            <Row row responsive justifySpaceAround >
            <S.Wrapper disabled={!canada} onClick={() => {
                setCanada(!canada)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[0].id, status: canada ? 0 : 1 },
                        position: 0
                    }
                })
            }}>
                <Row marginBottom3 alignItemsCenter>
                    <VHIcon icon={'canada'} title="city" lg />
                </Row>
                <Row alignItemsCenter>
                    <VHText
                        variant={"platform2"}
                        color="black-100"
                        text={'Canada'}
                    />
                </Row>
            </S.Wrapper>

            <S.Wrapper disabled={!germany} onClick={() => {
                setGermany(!germany)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[1].id, status: germany ? 0 : 1 },
                        position: 1
                    }
                })
            }}>
                <Row marginBottom3 alignItemsCenter>
                    <VHIcon icon={'germany'} title="city" lg />
                </Row>
                <Row alignItemsCenter>
                    <VHText
                        variant={"platform2"}
                        color="black-100"
                        text={'Germany'}
                    />
                </Row>
            </S.Wrapper>
            </Row>
            <Row row responsive justifySpaceAround >
            <S.Wrapper disabled={!ireland} onClick={() => {
                setIreland(!ireland)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[2].id, status: ireland ? 0 : 1 },
                        position: 2
                    }
                })
            }}>
                <Row marginBottom3 alignItemsCenter>
                    <VHIcon icon={'ireland'} title="city" lg />
                </Row>
                <Row alignItemsCenter>
                    <VHText
                        variant={"platform2"}
                        color="black-100"
                        text={'Ireland'}
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper disabled={!netherlands} onClick={() => {
                setNetherlands(!netherlands)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[3].id, status: netherlands ? 0 : 1 },
                        position: 3
                    }
                })
            }}>
                <Row marginBottom3 alignItemsCenter>
                    <VHIcon icon={'netherlands'} title="city" lg />
                </Row>
                <Row alignItemsCenter>
                    <VHText
                        variant={"platform2"}
                        color="black-100"
                        text={'Netherlands'}
                    />
                </Row>
            </S.Wrapper>
            </Row>
            <Row row responsive justifySpaceAround >
            <S.Wrapper disabled={!uk} onClick={() => {
                setUk(!uk)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[4].id, status: uk ? 0 : 1 },
                        position: 4
                    }
                })
            }}>
                <Row marginBottom3 alignItemsCenter>
                    <VHIcon icon={'uk'} title="city" lg />
                </Row>
                <Row alignItemsCenter>
                    <VHText
                        variant={"platform2"}
                        color="black-100"
                        text={'U.K'}
                    />
                </Row>
            </S.Wrapper>

            <S.Wrapper disabled={!usa} onClick={() => {
                setUsa(!usa)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[5].id, status: usa ? 0 : 1 },
                        position: 5
                    }
                })
            }}>
                <Row marginBottom3 alignItemsCenter>
                    <VHIcon icon={'usa'} title="city" lg />
                </Row>
                <Row alignItemsCenter>
                    <VHText
                        variant={"platform2"}
                        color="black-100"
                        text={'U.S.A'}
                    />
                </Row>
            </S.Wrapper>
            </Row>
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

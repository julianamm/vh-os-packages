import React from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';

const VHSecondaryList = props => {
    let items = props.items ? props.items : [];
    if (items.length > 0) {
        items.sort((a, b) => (a.order > b.order) ? 1 : -1)
    }
    const list = props.list ? props.list : [];
    const secondList = props.secondList ? props.secondList : []
    return (
        <React.Fragment>
            < S.Wrapper >
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                        removeIndicator
                            preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[0] ? list.find(element => element.value === items[0].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={0}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    removeIndicator
                    preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[0] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[0] ? [secondList[items[0].yearsOfExperience]] : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={0}
                    />
                </Row>
            </ S.Wrapper>
            < S.Wrapper >
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[1] ? list.find(element => element.value === items[1].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={1}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    removeIndicator
                    preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[1] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[1] ? [secondList[items[1].yearsOfExperience]] : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={1}
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper>
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[2] ? list.find(element => element.value === items[2].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={2}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    removeIndicator
                    preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[2] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[2] ? [secondList[items[2].yearsOfExperience]] : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={2}
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper>
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[3] ? list.find(element => element.value === items[3].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={3}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    removeIndicator
                    preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[3] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[3] ? [secondList[items[3].yearsOfExperience]] : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={3}
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper>
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[4] ? list.find(element => element.value === items[4].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={4}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    removeIndicator
                    preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[4] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[4] ? [secondList[items[4].yearsOfExperience]] : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={4}
                    />
                </Row>
            </S.Wrapper>
        </React.Fragment>
    )
}

export default VHSecondaryList;
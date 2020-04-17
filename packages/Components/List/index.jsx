import React from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';

const VHList = props => {
    let items = props.items ? props.items : [];
    if (items.length > 0) {
        items.sort((a, b) => (a.id < b.id) ? 1 : -1)
    }
    const list = props.list ? props.list : [];
    const secondList = props.secondList ? props.secondList : []
    return (
        <React.Fragment>
            < S.Wrapper >
                <Row alignItemsCenter row responsive>
                    <Row responsive width="27px" marginRight={1}>
                        <VHText variant={'platform'} text="1st" color={'gray-90'}  />
                    </Row>
                    <Row responsive marginRight={2}>
                        <VHSelect
                            preLoading={props.controls.topSkill.preLoading}
                            placeholder='Select your top skill'
                            removeIndicator
                            removeDropdownIcon
                            bold={false}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'topSkillExperience'}
                            className={'topSkillExperience'}
                            currentItem={items[0] ? list.find(element => element.value === items[0].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={0}
                            
                        />
                    </Row>
                </Row>
                <Row width={'20%'} responsive >
                    <VHSelect
                        preLoading={props.controls.topSkill.preLoading}
                        placeholder='Experience'
                        removeIndicator
                        isDisabled={!items[0] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'topSkillYears'}
                        className={'topSkillYears'}
                        currentItem={items[0] ? secondList.find(element => element.value === items[0].yearsOfExperience) : {}}
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
                <Row responsive alignItemsCenter row >
                    <Row responsive width="27px" marginRight={1}>
                        <VHText variant={'platform'} text="2nd" color={'gray-90'} />
                    </Row>
                    <Row responsive marginRight={2}>
                        <VHSelect
                            preLoading={props.controls.topSkill.preLoading}
                            placeholder='Select your top skill'
                            removeIndicator
                            bold={false}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'topSkillExperience'}
                            className={'topSkillExperience'}
                            currentItem={items[1] ? list.find(element => element.value === items[1].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={1}
                        />
                    </Row>
                </Row>
                <Row width={'20%'} responsive>
                    <VHSelect
                        preLoading={props.controls.topSkill.preLoading}
                        placeholder='Experience'
                        removeIndicator
                        isDisabled={!items[1] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'topSkillYears'}
                        className={'topSkillYears'}
                        currentItem={items[1] ? secondList.find(element => element.value === items[1].yearsOfExperience) : {}}
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
                <Row alignItemsCenter row responsive>
                    <Row responsive width="27px" marginRight={1}>
                        <VHText variant={'platform'} text="3rd" color={'gray-90'} />
                    </Row>
                    <Row responsive marginRight={2}>
                        <VHSelect
                            preLoading={props.controls.topSkill.preLoading}
                            placeholder='Select your top skill'
                            removeIndicator
                            bold={false}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'topSkillExperience'}
                            className={'topSkillExperience'}
                            currentItem={items[2] ? list.find(element => element.value === items[2].id) : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={2}
                        />
                    </Row>
                </Row>
                <Row width={'20%'} responsive>
                    <VHSelect
                        preLoading={props.controls.topSkill.preLoading}
                        placeholder='Experience'
                        removeIndicator
                        isDisabled={!items[2] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'topSkillYears'}
                        className={'topSkillYears'}
                        currentItem={items[2] ? secondList.find(element => element.value === items[2].yearsOfExperience) : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={2}
                    />
                </Row>
            </S.Wrapper>
        </React.Fragment>
    )
}

export default VHList;
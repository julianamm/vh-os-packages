import React from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';

const VHLanguageList = props => {
    let items = props.items ? props.items : [];
    if (items.length > 0) {
        items.sort((a, b) => (a.order > b.order) ? 1 : -1)
    }
    const list = props.list ? props.list : [];
    const secondList = props.secondList ? props.secondList : []
    return (
        <React.Fragment>
            < S.Wrapper >
                <Row width={'30%'} alignItemsCenter row >
                    <Row width={'70%'}>
                        <VHSelect
                            preLoading={props.controls.language.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'defaultLanguage'}
                            className={'language'}
                            currentItem={{value:'en', label:'English'}}
                            items={[{value:'en', label:'English'}]}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={0}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    preLoading={props.controls.language.preLoading}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'proficiency'}
                        className={'proficiency'}
                        currentItem={items[0] ? [secondList[items[0].level]] : {}}
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
                <Row width={'30%'} alignItemsCenter row >
                    <Row width={'70%'}>
                        <VHSelect
                        preLoading={props.controls.language.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'defaultLanguage'}
                            className={'language'}
                            currentItem={{value:'fr', label:'French'}}
                            items={[{value:'fr', label:'French'}]}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={1}
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                    preLoading={props.controls.language.preLoading}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'proficiency'}
                        className={'proficiency'}
                        currentItem={items[1] ? [secondList[items[1].level]] : {}}
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
                <Row width={'30%'} alignItemsCenter row >
                    <Row width={'70%'}>
                        <VHSelect
                        preLoading={props.controls.language.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'language'}
                            className={'language'}
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
                    preLoading={props.controls.language.preLoading}
                        isDisabled={!items[2] ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'proficiency'}
                        className={'proficiency'}
                        currentItem={items[2] ? [secondList[items[2].level]] : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={items[2] ? items[2] : ''}
                    />
                </Row>
            </S.Wrapper>
        </React.Fragment>
    )
}

export default VHLanguageList;
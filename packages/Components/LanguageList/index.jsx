import React from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';

const VHLanguageList = props => {

    const english = props.items.find(element => element.code === 'en')
    const french = props.items.find(element => element.code === 'fr')
    const other = props.items.find(element => element.code != 'en' && element.code != 'fr')

    const list = props.list ? props.list : [];
    const secondList = props.secondList ? props.secondList : []
    
    return (
        <React.Fragment>
            < S.Wrapper >
                <Row alignItemsCenter row marginRight={2} marginLeft={2}>
                    <Row >
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.language.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'defaultLanguage'}
                            className={'language'}
                            currentItem={{ value: 'en', label: 'English' }}
                            items={[{ value: 'en', label: 'English' }]}
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
                        currentItem={english != undefined ? secondList[english.level] : {}}
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
                <Row alignItemsCenter row marginRight={2} marginLeft={2}>
                    <Row>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.language.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'defaultLanguage'}
                            className={'language'}
                            currentItem={{ value: 'fr', label: 'French' }}
                            items={[{ value: 'fr', label: 'French' }]}
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
                        currentItem={french != undefined ? secondList[french.level] : {}}
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
                <Row alignItemsCenter row marginRight={2} marginLeft={2}>
                    <Row>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.language.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'language'}
                            className={'language'}
                            currentItem={other != undefined ? { value: other.code, label: other.name } : {}}
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
                        isDisabled={other === undefined ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'proficiency'}
                        className={'proficiency'}
                        currentItem={other != undefined ? secondList[other.level] : {}}
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

export default VHLanguageList;
import React from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';

const VHList = props => {
    const items = props.items ? props.items : []
    const currentItem = props.currentItem ? props.currentItem : []
    return (
        <React.Fragment>
            {items.map(item => {
                return (
                    < S.Wrapper >
                        <Row width={'20%'}>
                            <VHSelect
                                removeBorder
                                caption=""
                                data={'AnyObjectOrString'}
                                className={'AnyObjectOrString'}
                                currentItem={currentItem}
                                items={items}
                                description=""
                                descriptionColor="primary"
                                leftText=""
                                onEvent={e => {
                                    console.log(e)
                                }}
                            />
                        </Row>
                        <Row width={'20%'}>
                            <VHSelect
                                removeBorder
                                caption=""
                                data={'AnyObjectOrString'}
                                className={'AnyObjectOrString'}
                                currentItem={currentItem}
                                items={items}
                                description=""
                                descriptionColor="primary"
                                leftText=""
                                onEvent={e => {
                                    console.log(e)
                                }}
                            />
                        </Row>
                    </S.Wrapper>
                )
            })
            }
        </React.Fragment >
    )
}

export default VHList;
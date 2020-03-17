import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Colors from '../../Colors'
import * as S from './styles'
import VHImg from '../Img'

const VHProfileMenu = props => {
    const links = props.links
    return (
        <Container fullWidth>
            <Row column fixed width={'310px'}>
                {
                    links.map((link, index) => {
                        return (
                            <S.Wrapper>
                                  <VHImg source={link.img} sm />
                                <S.Link >{link.name}</S.Link>
                            </S.Wrapper>
                        )
                    })
                }
            </Row>
        </Container>
    )

}


export default VHProfileMenu

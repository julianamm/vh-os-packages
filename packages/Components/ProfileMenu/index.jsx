import React, { Component } from 'react'
import { ScrollableAnchor, removeHash } from 'react-scrollable-anchor'
import * as S from './styles'
import { Container, Row } from '../../Grid/';
import VHImg from "../Img";
export default class VHProfileMenu extends Component {
    render() {
        return (
            <Container fullWidth>
                <Row column fixed width={'310px'}>
                    {
                        this.props.links.map((link, index) => {
                            return (
                                <S.Wrapper>
                                    <VHImg source={link.img} sm />
                                    <S.Link onClick={() => {
                                        document.getElementById(link.href).scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}>{link.name}</S.Link>
                                </S.Wrapper>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}
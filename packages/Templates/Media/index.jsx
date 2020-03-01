import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Row, Container } from '../../Grid';
import VHMediaContactCard from '../../Components/MediaContactCard/index';
import * as S from './styles';

class VHMediaTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <S.Wrapper1>
                        <Container md>
                            <Row alignItemsCenter>
                                <S.Press>{this.props.press}</S.Press>
                            </Row>
                        </Container>
                    </S.Wrapper1>
                    <S.Wrapper2>
                        <Container md>
                            <Row alignItemsCenter>
                                <div style={{width: "80%", margin:"-100px", boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)", borderRadius: "6px"}}>
                                    <VHMediaContactCard
                                        title={this.props.title}
                                        name={this.props.name}
                                        email={this.props.email}
                                        phone={this.props.phone}
                                    />
                                </div>
                            </Row>
                        </Container>
                    </S.Wrapper2>
                </Row>
            </Container>
        )
    }
}

VHMediaTemplate.defaultProps = {
}

VHMediaTemplate.propTypes = {
}

export default VHMediaTemplate;

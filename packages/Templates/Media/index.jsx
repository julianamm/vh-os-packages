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
            <React.Fragment>
                <Row>
                    <S.Wrapper1>
                        <Container md alignItemsCenter>
                            <Row alignItemsCenter>
                                <S.Press>{this.props.press}</S.Press>
                            </Row>
                        </Container>
                    </S.Wrapper1>
                    <S.Wrapper2>
                        <Container md>
                                <Row>
                                    <VHMediaContactCard
                                        title={this.props.title}
                                        name={this.props.name}
                                        email={this.props.email}
                                        phone={this.props.phone}
                                    />
                                </Row>
                        </Container>
                    </S.Wrapper2>
                </Row>
            </React.Fragment>
        )
    }
}

VHMediaTemplate.defaultProps = {
}

VHMediaTemplate.propTypes = {
}

export default VHMediaTemplate;

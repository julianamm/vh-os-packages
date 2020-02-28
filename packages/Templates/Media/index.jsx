import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Row } from '../../Grid';
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
                        <S.Press>{this.props.press}</S.Press>
                    </S.Wrapper1>
                    <S.Wrapper2>
                        <VHMediaContactCard
                            title={this.props.title}
                            name={this.props.name}
                            email={this.props.email}
                            phone={this.props.phone}
                        />
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

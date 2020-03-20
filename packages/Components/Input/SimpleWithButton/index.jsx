import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../../Grid/index';
import VHInput from '../Simple/index';
import VHButton from '../../Button/index';


const VHInputSimpleWithButton = props => {
  return (
    <Row row>
        <Row width={"85%"} style={{marginRight: "4px"}}>
            <VHInput
                disabled={props.disabled}
                error={props.error}
                loading={props.loading}
                placeholder={props.placeholder}
                data={props.data}
                value={props.value}
                onEvent={props.onEvent}
            />
        </Row>
        <Row width={"15%"}>
            <VHButton 
                primary 
                lg 
                onEvent={props.onEvent} 
                label={props.label} 
            />
        </Row>
    </Row>
  )
}

VHInputSimpleWithButton.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    loading: false,
}

VHInputSimpleWithButton.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    placeholder: PropTypes.string,
    onEvent: PropTypes.func,
    datat: PropTypes.string,
    label: PropTypes.string,
}

export default VHInputSimpleWithButton;

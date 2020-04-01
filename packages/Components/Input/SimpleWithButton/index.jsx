import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../../Grid/index';
import VHInput from '../Simple/index';
import VHButton from '../../Button/index';


const VHInputSimpleWithButton = props => {
  return (
    <Row row>
        <Row width={"90%"} style={{marginRight: "4px"}}>
            <VHInput
                disabled={props.disabled}
                error={props.error}
                loading={props.loading}
                placeholder={props.placeholder}
                data={props.data}
                value={props.value}
                onEvent={props.onEvent}
                data={props.data}
            />
        </Row>
        <VHButton 
            primary 
            lg 
            onEvent={props.onEvent} 
            label={props.label} 
            data={props.data}
        />
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
    onEvent: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    placeholder: PropTypes.string,
    onEvent: PropTypes.func,
    datat: PropTypes.string,
    label: PropTypes.string,
}

export default VHInputSimpleWithButton;

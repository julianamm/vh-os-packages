import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Colors from '../../Colors'

const FinishStep = props => {
 
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <div style={{ marginBottom: '36px', marginTop: '60px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '24px', color: '#4f4f4f' }}>Thank you !</h1>
        </div>
        <div style={{ paddingLeft: '100px', paddingRight: '100px', marginBottom: '50px' }}>
            <p style={{ textAlign: 'center', lineHeight: '28px', fontFamily: 'Roboto', fontSize: '16px', color: '#4f4f4f' }}>You will be redirected to your Profile page.</p>
        </div>
    </div>
    )

}

FinishStep.defaultProps = {
    className: "",
};

FinishStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default FinishStep

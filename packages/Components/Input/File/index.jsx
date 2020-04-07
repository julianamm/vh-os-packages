import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"
import Loader from '../../Preloader';

const VHInputFile = props => {

    return (
        <S.Input type={'file'} onChange={(e) => {
            props.onEvent({
              type: "onChange",
              origin: "VHInputFile",
              props: {
                data: e.target.files[0]
               }
            })
        }}>
        </S.Input>
    )
}

VHInputFile.defaultProps = {
}

VHInputFile.propTypes = {
}

export default VHInputFile

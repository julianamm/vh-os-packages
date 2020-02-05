import React from 'react'
import PropTypes from 'prop-types'
import { Row } from "../../Grid";

import * as S from './styles'

const VHColumn = props => {
    return (
      <S.Column className={`vh-vp-column-component ${props.className ? props.className : ''}`}>
        <Row row alignItemsCenter className={`vh-vp-row-header-component ${props.className ? props.className : ''}`}>
            <S.ColumnName>{props.columnName}</S.ColumnName>
            <S.NumberOfCards>
              6
            </S.NumberOfCards>
        </Row>
        <Row className={`vh-vp-row-avg-time-component ${props.className ? props.className : ''}`}>
          <S.AvgTime>{`Avg Time ${props.avgTime} days`}</S.AvgTime>
        </Row>
        <Row className={`vh-vp-row-cards-component ${props.className ? props.className : ''}`}>
          {props.children}
        </Row>
      </S.Column>
    )

}

VHColumn.defaultProps = {
  className: '',
}

VHColumn.propTypes = {
    
}

export default VHColumn

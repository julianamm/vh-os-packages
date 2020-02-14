import React from 'react'
import PropTypes from 'prop-types'
import { Row } from "../../Grid";

import * as S from './styles'
import VHCardVisaProcess from "../Cards/VisaProcess";

const VHColumn = props => {
  return (
    <S.Column 
      id={props.id}
      className={`vh-vp-column-component ${props.className ? props.className : ''}`}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.onDragLeave}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}>
      <Row row alignItemsCenter className={`vh-vp-row-header-component ${props.className ? props.className : ''}`}>
        <S.ColumnName>{props.column.name}</S.ColumnName>
        <S.NumberOfCards>
          {props.column.total}
        </S.NumberOfCards>
      </Row>
      <Row className={`vh-vp-row-avg-time-component ${props.className ? props.className : ''}`}>
        <S.AvgTime>{`Avg Time ${props.column.avgTime} days`}</S.AvgTime>
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

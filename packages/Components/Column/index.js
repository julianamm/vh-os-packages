import React from 'react'
import PropTypes from 'prop-types'
import { Row } from "../../Grid";

import * as S from './styles'
import VHCardVisaProcessSkeleton from "../Cards/VisaProcess/skeleton";
import VHAvatarSkeleton from "../Skeleton/Avatar";
import VHTextSkeleton from "../Skeleton/Text";

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
        <S.ColumnName>{props.name}</S.ColumnName>
        <S.NumberOfCards>
          {
            props.loading
            ? <VHAvatarSkeleton />
            : <>{props.total}</>
          }
        </S.NumberOfCards>
      </Row>
      <Row className={`vh-vp-row-avg-time-component ${props.className ? props.className : ''}`}>
        <S.AvgTime>
          {
            props.loading
            ? <VHTextSkeleton />
            : <>{`Avg Time ${props.avgTime} days`}</>
          }
        </S.AvgTime>
      </Row>
      <Row className={`vh-vp-row-cards-component ${props.className ? props.className : ''}`}>
      {
        props.loading
        ? <VHCardVisaProcessSkeleton random />
        : <>{props.children}</>
      }
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

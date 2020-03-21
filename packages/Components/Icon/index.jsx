import React from 'react'
import PropTypes from 'prop-types'
import BulletIcon  from '../../../assets/icons/dot.svg'
import FilterIcon  from '../../../assets/icons/icon_filter.svg'
import ArrowLeftIcon  from '../../../assets/icons/ico-arrow-left.svg'
import SortIcon  from '../../../assets/icons/icon_swap-vert.svg'
import SearchIcon  from '../../../assets/icons/mdi_search.svg'

import Color from "../../Colors";

let size = {
  w: 18,
  h: 18
}

let defaultColor = "silver"

const VHIcon = props => {

  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      }
      break
    case props.sm:
      size = {
        w: 24,
        h: 24
      }
      break
    case props.md:
      size = {
        w: 36,
        h: 36
      }
      break
    case props.lg:
      size = {
        w: 48,
        h: 48
      }
      break
  }

  switch (true) {
    case props.primary:
      defaultColor = "blue"
      break
    case props.danger:
      defaultColor = "red"
      break
    case props.warning:
      defaultColor = "yellow"
      break
    case props.info:
      defaultColor = "silver"
      break
  }

  if(props.color) {
    defaultColor = Color[props.color];
  }

  switch (props.icon) {
    case "bullet":
      return <BulletIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "sort":
      return <SortIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "filter":
      return <FilterIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "search":
      return <SearchIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "arrow-left":
      return <ArrowLeftIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    default:
      return <span/>

  }
}

VHIcon.defaultProps = {
  className: '',
}
export const IconPropTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
}

VHIcon.propTypes = IconPropTypes

export default VHIcon

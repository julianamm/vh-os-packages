import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from '../../assets/svg/icons/icon_delete.svg/index.js'
import BulletIcon from '../../assets/svg/icons/dot.svg/index.js'
import FilterIcon from '../../assets/svg/icons/icon_filter.svg/index.js'
import ArrowLeftIcon from '../../assets/svg/icons/icon_arrow_left.svg/index.js'
import SortIcon from '../../assets/svg/icons/icon_swap_vert.svg/index.js'
import SearchIcon from '../../assets/svg/icons/mdi_search.svg/index.js'
import GitHubIcon from '../../assets/svg/icons/icon_github.svg/index.js'
import LinkedInIcon from '../../assets/svg/icons/icon_linkedin_login.svg/index.js'
import WebSiteIcon from '../../assets/svg/icons/icon_globe.svg/index.js'
import USA from '../../assets/svg/flags/flag_usa.svg/index.js';
import Canada from '../../assets/svg/flags/flag_canada.svg/index.js';
import Germany from '../../assets/svg/flags/flag_germany.svg/index.js';
import Ireland from '../../assets/svg/flags/flag_ireland.svg/index.js';
import Netherlands from '../../assets/svg/flags/flag_netherlands.svg/index.js';
import UK from '../../assets/svg/flags/flag_uk.svg/index.js';
import Brazil from '../../assets/svg/flags/flag_brazil.svg/index.js';
import China from '../../assets/svg/flags/flag_china.svg/index.js';
import India from '../../assets/svg/flags/flag_india.svg/index.js';
import SouthAfrica from '../../assets/svg/flags/flag_south_africa.svg/index.js';
import Russia from '../../assets/svg/flags/flag_russia.svg/index.js';
import CameraIcon from '../../assets/svg/icons/icon_camera.svg/index.js';
import Interview from '../../assets/svg/icons/icon_interview.svg/index.js';
import Profile from '../../assets/svg/icons/icon_profile.svg/index.js';
import Community from '../../assets/svg/icons/icon_community.svg/index.js';
import ArrowRightIcon from '../../assets/svg/icons/icon_arrow_right.svg/index.js';
import MedalIcon from '../../assets/svg/icons/icon_medal.svg/index.js';
import PlayIcon from '../../assets/svg/icons/icon_play.svg/index.js';

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

  if (props.color) {
    defaultColor = Color[props.color];
  }

  switch (props.icon) {
    case 'webSite':
      return <WebSiteIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case "bullet":
      return <BulletIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case "sort":
      return <SortIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case "filter":
      return <FilterIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case "search":
      return <SearchIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case "arrow-left":
      return <ArrowLeftIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'github':
      return <GitHubIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'world':
      return <WebSiteIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'linkedin':
      return <LinkedInIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'search':
      return <SearchIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'usa':
      return <USA fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'canada':
      return <Canada fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'ireland':
      return <Ireland fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'uk':
      return <UK fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'germany':
      return <Germany fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'netherlands':
      return <Netherlands fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'brazil':
      return <Brazil fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'china':
      return <China fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'india':
      return <India fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'south-africa':
      return <SouthAfrica fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'russia':
      return <Russia fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'camera':
      return <CameraIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'interview':
      return <Interview fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'community':
      return <Community fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'profile':
      return <Profile fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'arrow-right':
      return <ArrowRightIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'medal':
      return <MedalIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'play':
      return <PlayIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    case 'delete':
      return <DeleteIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    default:
      return <span />
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

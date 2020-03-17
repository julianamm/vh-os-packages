import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid/index";
import VHAvatar from "../../Avatar/index";
import VHText from "../../Text/index";
import * as S from './styles';

const VHCardHired = props => {
  return (
    <Row>
        <Row alignItemsCenter>
            <S.OutterImg>
                <VHAvatar 
                    image={props.userPhoto}
                    size={"xl"}
                    showCursor={true}
                />
                <S.InnerImg>
                    <VHAvatar 
                        image={props.flag}
                        size={"md"}
                        showCursor={true}
                        />
                </S.InnerImg>
            </S.OutterImg>
        </Row>
        <Row alignItemsCenter marginTop={10}>
            <VHText 
                variant={"subtitle3"}
                color={"gray-90"}
                text={props.name}
            />
            <VHText 
                variant={"platform"}
                color={"gray-70"}
                text={props.position}
            />
            <VHText 
                variant={"platform"}
                color={"gray-70"}
                text={props.country}
            />
        </Row>
    </Row>
  )
}

VHCardHired.defaultProps = {
  className: '',
  showCursor: false,
}

VHCardHired.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  country: PropTypes.string,
  userPhoto: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
}

export default VHCardHired;
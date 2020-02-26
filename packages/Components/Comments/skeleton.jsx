import React from "react";
import PropTypes from "prop-types";
import VHAvatar from "../Avatar";
import VHText from "../Text";
import * as S from "./styles";
import { Row } from "../../Grid";
import VHAvatarSkeleton from '../Skeleton/Avatar'
import VHTextSkeleton from '../Skeleton/Text'
import VHDescriptionSkeleton from '../Skeleton/Description'

const VHCommentsSkeleton = props => {
  return (
    <Row className={`vh-comments ${props.className ? props.className : ''}`}>
      <Row marginBottom5>
        <VHText
          variant={"platform2"}
          color="gray-80"
          text={`Comments ...`}
        />
      </Row>
      <Row margin>
        <S.Wrapper>
          {[1,2,3].map(comment => (
            <Row row marginBottom={10}  >
              <Row margin autoWidth paddingRight8>
                <VHAvatarSkeleton />
              </Row>
              <Row margin>
                <Row margin>
                  <VHTextSkeleton />
                </Row>
                <Row margin>
                  <VHDescriptionSkeleton />
                </Row>
              </Row>
            </Row>
          ))}
        </S.Wrapper>
      </Row>
    </Row>
  );
};

VHCommentsSkeleton.defaultProps = {
  comments: [],
  onEvent: null,
  className: ""
};

VHCommentsSkeleton.propTypes = {
  comments: PropTypes.array,
  onEvent: PropTypes.func,
  className: PropTypes.string
};

export default VHCommentsSkeleton;

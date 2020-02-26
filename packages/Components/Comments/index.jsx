import React from "react";
import PropTypes from "prop-types";
import VHAvatar from "../Avatar";
import VHText from "../Text";
import * as S from "./styles";
import { Row } from "../../Grid";
import Skeleton from './skeleton'

const VHComments = props => {

  return (
    <Row className={`vh-comments ${props.className ? props.className : ''}`}>
      {
        props.loading
        ? <Skeleton />
        : <>
        <Row marginBottom5>
          <VHText
            variant={"platform2"}
            color="gray-80"
            text={`Comments (${props.comments.length})`}
          />
        </Row>
        <Row margin>
          <S.Wrapper>
            {props.comments.map(comment => (
              <Row row margin justifyBottom >
                <Row margin autoWidth paddingRight8>
                  <VHAvatar image={comment.user.avatar} size={"md"} />
                </Row>
                <Row margin>
                  <Row margin row alignItemsCenter >
                    <VHText
                      variant={"platform"}
                      color="gray-100"
                      text={comment.user.name}
                    />
                    <S.TextWrapper>
                      <VHText
                        variant={"caption"}
                        color="gray-50"
                        text={comment.createdOn}
                      />
                    </S.TextWrapper>
                  </Row>
                  <Row margin marginBottom5>
                    <VHText
                      variant={"platform"}
                      color="gray-80"
                      text={comment.note}
                    />
                  </Row>
                </Row>
              </Row>
            ))}
          </S.Wrapper>
        </Row>
        </>
      }
      <Row row margin alignItemsCenter>
        <VHAvatar
          image={
            "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
          }
          size={"md"}
        />
        <S.Area placeholder="Ask a question or post a uptade"
          onKeyUp={event => {
            if (props.onEvent && event.key === 'Enter') {
              props.onEvent({
                data: props,
                type: 'onEvent',
                target: 'VHComments',
                comment: event.currentTarget.value.replace(/\n/g, " ")
              })
              event.currentTarget.value = ''
            };
          }}></S.Area>
      </Row>
    </Row>
  );
};

VHComments.defaultProps = {
  comments: [],
  onEvent: null,
  className: ""
};

VHComments.propTypes = {
  comments: PropTypes.array,
  onEvent: PropTypes.func,
  className: PropTypes.string
};

export default VHComments;

import React from "react";
import PropTypes from "prop-types";
import VHCardBase from "../Base";
import { Row } from "../../../Grid";
import * as S from "./styles";
import VHAvatarSkeleton from '../../Skeleton/Avatar'
import VHTextSkeleton from '../../Skeleton/Text'
const VHCardVisaProcessSkeleton = props => {
  const arr = [1,2,3,4,5,6]
  if ( props.random ) {
    const x = Math.floor((Math.random() * 3) + 1);
    arr.length = x
  } else {
    arr.length = 1
  }

    return (
      <>
        {
        arr.map(item => {
          return (
            <Row marginBottom={10}>
          <VHCardBase>
            <Row margin>
              <VHTextSkeleton/>
            </Row>
            <Row margin>
                <Row row alignItemsCenter>
                  <Row autoWidth paddingRight2>
                    <VHAvatarSkeleton />
                  </Row>
                  <Row>
                    <VHTextSkeleton primary/>
                  </Row>
                </Row>
            </Row>
            <Row margin>
                <Row row alignItemsCenter>
                  <Row autoWidth paddingRight2>
                    <VHAvatarSkeleton />
                  </Row>
                  <Row>
                    <VHTextSkeleton/>
                  </Row>
                </Row>
            </Row>
            <Row margin>
                <Row row alignItemsCenter>
                  <Row autoWidth paddingRight2>
                    <VHAvatarSkeleton />
                  </Row>
                  <Row>
                    <VHTextSkeleton/>
                  </Row>
                </Row>
            </Row>
            <Row >
              <S.Footer>
              <Row row alignItemsCenter>
                <Row>
                  <VHTextSkeleton/>
                </Row>
                <Row alignItemsRight>
                  <VHAvatarSkeleton />
                </Row>
                </Row>
              </S.Footer>
            </Row>
          </VHCardBase>
          </Row>
          )

        })

        }

        </>
    )

};

export default VHCardVisaProcessSkeleton;

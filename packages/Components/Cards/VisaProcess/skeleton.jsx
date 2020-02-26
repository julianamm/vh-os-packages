import React from "react";
import PropTypes from "prop-types";
import VHCardBase from "../Base";
import { Row } from "../../../Grid";
import * as S from "./styles";
import VHAvatarSkeleton from '../../Skeleton/Avatar'
import VHTextSkeleton from '../../Skeleton/Text'
const VHCardVisaProcessSkeleton = props => {
  if ( props.random ) {
    const x = Math.floor((Math.random() * 5) + 1);
    const arr = [1,2,3,4,5,6]
    arr.length = x
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
                  <VHTextSkeleton />
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
  }
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
        <Row>
          <S.Footer>
            <Row row alignItemsCenter>
              <Row>
                <VHTextSkeleton />
              </Row>
              <Row alignItemsRight>
                <VHAvatarSkeleton />
              </Row>
              </Row>
            </S.Footer>
        </Row>
      </VHCardBase>
      </Row>
  );
};

export default VHCardVisaProcessSkeleton;

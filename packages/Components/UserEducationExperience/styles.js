import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    padding-bottom: 21px;

    ${({ hideTimeline }) => !hideTimeline &&`
        border-left: 1px solid ${Color["gray-30"]};
        padding-left: 15px;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: 0px;
            left: -6px;
            background-color: ${Color["gray-30"]};
            border-radius: 50%;
            z-index: 1;
        }
    `}
`
;


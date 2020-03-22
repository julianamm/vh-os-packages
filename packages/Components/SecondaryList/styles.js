import styled from 'styled-components';
import Color from "../../Colors";

export const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    border-bottom: 1px solid ${Color['gray-30']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover {
      background-color: ${Color["gray-20"]};
    }
`;
import styled from 'styled-components'
import Color from '../../Colors'

export const Wrapper = styled.div`
  height: 180px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;

  :hover {
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Color["gray-30"]};
    border-radius: 4px;
  }
`
export const Area = styled.textarea`
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: solid 1px ${Color["gray-30"]};
    background-color: ${Color["gray-20"]};
    padding: 15px;
    margin-left: 1rem;
    outline: 0;
    ::placeholder {
        color: gray;
    }
`

export const TextWrapper = styled.span`
    margin-left: 1rem;
`
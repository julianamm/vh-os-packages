import styled from 'styled-components';

export const Item = styled.div`
  min-height: 220px;
  border-left: 2px solid blue;
  position: relative;
  display: flex;

  :last-child {
    border-left: none;
  }

  @media (max-width: 425px) {
    height: 290px;
  }
`;

export const Elipse = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: blue;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: -5px;
`


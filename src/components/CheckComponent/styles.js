import styled, { css } from 'styled-components';

export const CheckContainer = styled.div`
  /* width: 325px; */
  display: flex;
  border-radius: 21px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border: 1px solid #4480c5;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: #ffffff;
  border-radius: 21px;
  font-size: 16px;
  color: #4480c5;
  width: 100px;
  cursor: pointer;
  ${({ check }) =>
    check &&
    css`
      background-color: #4480c5;
      border-radius: 21px;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
    `}

  img {
    margin-right: 5px;
  }
`;

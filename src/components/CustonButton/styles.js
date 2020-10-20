import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonContainer = styled(Button)`
  &.MuiButton-root {
    background-color: ${({ highlight }) => (highlight ? '#ff6a17' : '#4480c5')};
    padding: 5px 35px;
    text-align: center;
    color: #ffffff;
    font-size: 22px;
    border-radius: 26px;
    text-transform: none;
    font-weight: bold;
    &:hover {
      background-color: ${({ highlight }) =>
        highlight ? '#ff6a17' : '#4480c5'};
      opacity: 0.7;
    }
  }
`;

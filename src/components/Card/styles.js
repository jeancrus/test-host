import styled, { css } from 'styled-components';
import Card from '@material-ui/core/Card';

export const CardContainer = styled(Card)`
  margin-top: 10px;
  border-color: #dfecff;
  display: flex;
  flex-direction: column;
  width: 320px;
  justify-content: center;
  align-items: center;
  position: relative;
  &.MuiCard-root {
    overflow: initial;
  }

  ${({ highlight }) =>
    highlight &&
    css`
      &::before,
      &::after {
        position: absolute;
        content: '';
        width: 320px;
        background-color: #ff6a17;
      }
      &::before {
        top: -8px;
        height: 10px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &::after {
        bottom: -4px;
        height: 4px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `}

  margin-right: 10px;

  .box-border {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #dfecff;
    &:last-child {
      border-bottom: none;
    }
    padding: 26px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .box-1 {
    h2 {
      margin-top: 10px;
      color: #1d5297;
      font-size: 26px;
    }
  }

  .box-2 {
    .small-1 {
      font-size: 13px;
      color: #333333;
      span:first-child {
        text-decoration: line-through;
        margin-right: 5px;
      }
    }
    > p {
      color: #1d5297;
      font-size: 20px;
      margin-bottom: 20px;
      b {
        font-size: 35px;
      }
    }
    .small-2 {
      display: flex;
      margin-top: 20px;
      span {
        font-size: 15px;
        color: #333333;
        display: flex;
        img {
          margin-left: 5px;
        }
      }
    }

    .small-3 {
      color: #1d5297;
      font-size: 14px;
      margin-top: 10px;

      .green-offer {
        color: #ffffff;
        font-weight: bold;
        border-radius: 224px;
        background-color: #51c99c;
        text-transform: uppercase;
        padding: 3px 6px;
        margin-left: 5px;
      }
    }
  }

  .box-3 {
    li {
      margin-top: 5px;

      > p {
        padding-bottom: 5px;
        border-bottom: 2px dotted #dfecff;
        width: fit-content;
      }
    }
  }
`;

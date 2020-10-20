import styled from 'styled-components';

export const SubHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  #wave-container {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
  .box-blue {
    display: flex;
    justify-content: center;
    height: 270px;
    background: #1d5297;

    .text-box {
      display: flex;
      flex-direction: column;
      margin-top: 60px;
      text-align: center;
      max-width: 700px;

      b {
        font-weight: 600;
        letter-spacing: 1.6px;
        color: #b9d0ef;
        margin-bottom: 10px;
      }

      h1 {
        color: #ffffff;
        letter-spacing: 0px;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 40px;
      }

      p {
        letter-spacing: 0px;
        color: #b9d0ef;
        z-index: 99;
      }

      .select-icon {
        margin-top: 70px;
        z-index: 99;
      }
    }
  }
  #wave {
    display: block;
    position: relative;
    height: 30px;
    background: #1d5297;
  }

  #wave:before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 157%;
    height: 300px;
    background-color: #1d5297;
    left: -29%;
    top: -235px;
  }

  #wave:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: #1d5297;
    left: 0%;
    top: -237px;
  }

  .right-image,
  .left-image {
    position: absolute;
    z-index: 99;
  }

  .right-image,
  .left-image {
    bottom: 7%;
    width: 300px;
  }

  .left-image {
    right: 5%;
  }

  .right-image {
    left: 5%;
  }

  @media (max-width: 1024px) {
    .right-image,
    .left-image {
      display: none;
    }
  }

  @media (max-width: 700px) {
    .box-blue {
      .text-box {
        b,
        span {
          font-size: 16px;
        }
        h1 {
          font-size: 24px;
        }

        .select-icon {
          margin-top: 86px;
        }
      }
    }
  }
  @media (max-width: 321px) {
    .box-blue {
      height: 335px;
      .text-box {
        p {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          span {
            max-width: 220px;
            font-size: 14px;
            text-align: center;
            margin-right: 0 !important;
          }
        }
        .select-icon {
          margin-top: 55px;
        }
      }
    }
  }
`;

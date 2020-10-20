import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  .box-choose {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    > small {
      margin-bottom: 10px;
      font-size: 14px;
      color: #1d5297;
    }
  }

  .box-cards {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    flex-wrap: wrap;
    > div {
      max-width: 1000px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      a {
        width: 100%;
        margin-top: 10px;
        font-size: 12px;
        color: #4480c5;
        opacity: 0.7;
        text-align: end;
        margin-right: 15px;
      }
    }
  }
`;

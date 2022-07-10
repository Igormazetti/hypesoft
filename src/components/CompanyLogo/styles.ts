import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
  gap: 30px;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
    padding: 30px 0;
    gap: 30px;
  }

  .phrase {
    width: 340px;
    height: 120px;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;

    .num {
      color: #ed1ca6;
      font-size: 38px;
    }
  }

  .logos {
    display: flex;
    justify-content: flex-start;
    gap: 24px;

    @media screen and (max-width: 1025px) {
      display: grid;
      grid-template-columns: repeat(3, 150px);
      gap: 30px;
    }

    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 150px);
      gap: 30px;
    }

    .logoBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        border: 1px solid #ed1ca6;
      }

      width: 150px;
      height: 120px;
      background: linear-gradient(
          0deg,
          rgba(223, 227, 235, 0.3),
          rgba(223, 227, 235, 0.3)
        ),
        #ffffff;
    }

    img {
      background-color: transparent;
    }
  }
`

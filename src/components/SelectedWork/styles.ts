import styled from 'styled-components'

export const Container = styled.div`
  padding: 100px 0;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1025px) {
    margin-top: 450px;
  }

  @media screen and (max-width: 515px) {
    margin-top: 1050px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h3 {
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #7d00ff;
    }
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  object-fit: cover;

  width: 100%;
  padding: 0px;
  gap: 24px;
  margin-top: 52px;

  @media screen and (max-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 230px);
    gap: 20px;
  }

  @media screen and (max-width: 515px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

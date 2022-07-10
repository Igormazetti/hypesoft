import styled from 'styled-components'

interface CardProps {
  hovering: boolean
}

export const Container = styled.div<CardProps>`
  position: relative;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 37px;
  object-fit: cover;

  transition: all 0.2s ease-in-out;

  background: linear-gradient(
      0deg,
      rgba(223, 227, 235, 0.4),
      rgba(223, 227, 235, 0.4)
    ),
    #ffffff;
  border-radius: 6px;

  @media screen and (max-width: 1025px) {
    width: 230px;
  }

  svg {
    width: 40px;
    height: 40px;
    background: linear-gradient(
        0deg,
        rgba(223, 227, 235, 0.4),
        rgba(223, 227, 235, 0.4)
      ),
      #ffffff;
    margin-bottom: 105px;

    path,
    polyline,
    line,
    polygon {
      color: ${({ hovering }) => (hovering ? '#ed1ca6' : '#242424')};
    }
  }

  &:hover {
    border: 2px solid #ed1ca6;
    cursor: pointer;
    .discuss {
      display: block;
    }
  }

  .discuss-wrapper {
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 11px;
    background: transparent;
  }

  .discuss {
    display: none;
    color: #ed1ca6;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;

    @media screen and (max-width: 1025px) {
      font-size: 16px;
    }
  }

  .seta {
    background: linear-gradient(
        0deg,
        rgba(223, 227, 235, 0.4),
        rgba(223, 227, 235, 0.4)
      ),
      #ffffff;
  }

  .topimg {
  }

  span {
    background: linear-gradient(
        0deg,
        rgba(223, 227, 235, 0.4),
        rgba(223, 227, 235, 0.4)
      ),
      #ffffff;
    color: #242424;
    font-size: 32px;
    line-height: 40px;
  }

  .wrapper {
    background: linear-gradient(
        0deg,
        rgba(223, 227, 235, 0.4),
        rgba(223, 227, 235, 0.4)
      ),
      #ffffff;

    @media screen and (max-width: 1025px) {
      > span {
        font-size: 18px;
      }
    }
  }
`

export const Line = styled.div`
  width: 64px;
  height: 3px;
  background-color: #ed1ca6;
  color: #ed1ca6;
  opacity: 0.3;
  border-radius: 50px;

  margin-top: 16px;
  margin-bottom: 32px;
`

export const Icone = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  margin-bottom: 105px;

  svg {
    width: 40px;
    height: 40px;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  padding: 64px 0;
  margin-top: 46px;

  position: relative;

  @media screen and (max-width: 1025px) {
    margin-top: 26px;

    #Ellipse,
    #BannerDots,
    #PinkDots,
    #LittleEllipse {
      display: none;
    }
  }

  #Ellipse {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #BannerDots {
    position: absolute;
    left: 120px;
    background-color: transparent;
  }

  #PinkDots {
    position: absolute;
    right: 158px;
    bottom: 60px;
  }

  #LittleEllipse {
    position: absolute;
    right: 60px;
    top: 26px;
  }

  button {
    path {
      color: #242424;
    }

    &:hover {
      path {
        color: #ffffff;
      }
    }
  }

  div {
    z-index: 2;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    text-align: center;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #7d00ff;
    }

    span {
      color: #ed1ca6;
    }
  }
`

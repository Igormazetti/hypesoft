import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;

  .purpleBackground {
    position: absolute;
    top: -73px;
    right: -290px;
    width: 792px;
    height: 1120px;
    background: #7d00ff;
    opacity: 0.6;
  }

  @media screen and (max-width: 1025px) {
    .purpleBackground {
      display: none;
    }
  }
`

export const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  .igorimg {
    max-width: 760px;
    height: 974px;
    margin-right: -75px;

    z-index: 2;
    filter: brightness(0.8);
  }

  > svg {
    position: absolute;
    z-index: 9;
    right: 40px;
    top: 280px;
    background: transparent;
  }

  @media screen and (max-width: 1025px) {
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .igorimg {
      display: none;
    }
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  #greetings {
    margin-top: 210px;
    background-color: transparent;
    position: absolute;
    z-index: 3;

    .greetings-content {
      font-size: 80px;
      line-height: 98px;
      font-weight: 400;
      color: #fff;

      display: block;
      width: 766px;
      background: transparent;
      position: relative;

      span {
        color: #7d00ff;
        background: transparent;

        &::before {
          content: '';
          position: absolute;
          width: calc(100% - 5rem);
          height: 3.6rem;
          background: rgb(125, 0, 255);
          opacity: 0.15;
          left: 0px;
          bottom: 0px;
          z-index: 0;
        }
      }
    }

    #description {
      margin-top: 32px;
      font-size: 20px;
      line-height: 32px;
      color: #a5a5a5;
      background-color: transparent;

      width: 673px;
    }
  }

  #btn-container {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    background-color: transparent;
  }

  @media screen and (max-width: 1025px) {
    > div {
      align-items: center;
      justify-content: center;
    }

    #greetings {
      position: unset;
      margin: 100px auto;
    }

    #greetings .greetings-content {
      width: unset;
      max-width: fit-content;
      font-size: 60px;
      line-height: unset;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 178px;
  gap: 18px;

  span {
    color: #7d00ff;
    background: transparent;
  }
`

export const PinkHeart = styled(FaHeart)`
  path {
    color: #ed1ca6;
  }
  width: 14px;
  height: 14px;
`

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
`

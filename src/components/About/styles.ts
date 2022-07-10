import styled from 'styled-components'
import bkgimg from '../../../public/assets/bkgimg.png'

export const Container = styled.section`
  padding: 100px 0 121px;
  display: flex;
  gap: 88px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1025px) {
    padding: 50px 0 60px;
    flex-direction: column;
  }

  .bkg-img {
    position: relative;
    justify-content: center;
    align-items: center;

    .bkgimg {
      width: 540px;
      height: 542px;
      border-radius: 10px;
      position: relative;
      z-index: 2;
      background: url(${bkgimg.src}) no-repeat center;
      background-size: cover;
    }

    .imgBackground {
      position: absolute;
      width: 540px;
      height: 542px;
      background-color: #fff;
      border-radius: 10px;
      top: 32px;
      left: 32px;

      z-index: 0;
    }

    @media screen and (max-width: 1025px) {
      .bkgimg {
        width: 440px;
        height: 442px;
        border-radius: 10px;
        position: relative;
        z-index: 2;
        background: url(${bkgimg.src}) no-repeat center;
        background-size: cover;
      }

      .imgBackground {
        position: absolute;
        width: 440px;
        height: 442px;
        background-color: #fff;
        border-radius: 10px;
        top: 32px;

        z-index: 0;
      }
    }

    @media screen and (max-width: 620px) {
      .bkgimg {
        width: 340px;
        height: 342px;
        border-radius: 10px;
        position: relative;
        z-index: 2;
        background: url(${bkgimg.src}) no-repeat center;
        background-size: cover;
      }

      .imgBackground {
        position: absolute;
        width: 340px;
        height: 342px;
        background-color: #fff;
        border-radius: 10px;
        top: 32px;
        z-index: 0;
      }
    }
  }
`

export const Info = styled.article`
  margin-top: 29px;

  @media screen and (max-width: 1025px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #fff;
    width: 672px;
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 18px;
    line-height: 28px;
    color: #a5a5a5;
    width: 672px;
  }

  path {
    color: #242424;
  }

  button:hover {
    path {
      color: #ffffff;
    }
  }

  #about-btn {
    margin-top: 32px;
  }

  @media screen and (max-width: 1025px) {
    margin-top: 20px;

    h4 {
      font-weight: 500;
      font-size: 4rem;
      line-height: 4rem;
      color: #fff;
    }

    span {
      display: block;
      margin-top: 20px;
      font-size: 1.3rem;
      line-height: 28px;
      color: #a5a5a5;
      width: 652px;
    }
  }

  @media screen and (max-width: 620px) {
    margin-top: 20px;

    h4 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.5rem;
      color: #fff;
      width: 352px;
    }

    span {
      display: block;
      margin-top: 20px;
      font-size: 1rem;
      line-height: 28px;
      color: #a5a5a5;
      width: 352px;
    }
  }
`

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 50px;

  @media screen and (max-width: 620px) {
    margin-left: 5%;
    gap: 0;
    font-size: 14px;
    margin-top: 12px;
  }

  .first-span {
    width: 120px;
    height: 64px;
    color: #ed1ca6;
    font-weight: 400;
    font-size: 70px;
    line-height: 64px;
    margin-bottom: 15px;

    @media screen and (max-width: 620px) {
      font-size: 35px;
      width: 100px;
    }
  }

  .second-span {
    width: 130px;
    height: 64px;
    color: #ed1ca6;
    font-weight: 400;
    font-size: 70px;
    line-height: 64px;
    margin-bottom: 15px;
    @media screen and (max-width: 620px) {
      font-size: 35px;
      width: 100px;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 20px;
  }
`

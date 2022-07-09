import styled from 'styled-components'
import bkgimg from '../../../public/assets/bkgimg.png'

export const Container = styled.section`
  padding: 100px 0 121px;
  display: flex;
  gap: 88px;

  .bkg-img {
    position: relative;

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
  }
`

export const Info = styled.article`
  margin-top: 29px;

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
`

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 50px;

  .first-span {
    width: 120px;
    height: 64px;
    color: #ed1ca6;
    font-weight: 400;
    font-size: 70px;
    line-height: 64px;
    margin-bottom: 15px;
  }

  .second-span {
    width: 130px;
    height: 64px;
    color: #ed1ca6;
    font-weight: 400;
    font-size: 70px;
    line-height: 64px;
    margin-bottom: 15px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`

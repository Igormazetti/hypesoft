import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
// import Image from "next/image";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1308px;
  padding: 0 5%;
`;

// export const StyledImage = styled(Image)`
//   position: ;
//   width: 760px !important;
//   height: 974px !important;
//   margin-right: -176px !important;
//   z-index: 2 !important;
//   margin-left: auto !important;
//   filter: brightness(0.8) !important;
// `;

export const HomeWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  .purpleBackground {
    position: absolute;
    top: -73px;
    right: -394px;
    width: 792px;
    height: 1047px;
    background: #7d00ff;
    opacity: 0.6;
  }

  .igorimg {
    width: 760px;
    height: 974px;
    margin-right: -176px;
    z-index: 2;
    margin-left: auto;
    filter: brightness(0.8);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  #greetings {
    margin-top: 210px;
    position: absolute;
    background-color: transparent;
    z-index: 3;

    .greetings-content {
      font-size: 80px;
      line-height: 98px;
      font-weight: 400;
      color: #fff;

      display: block;
      width: 766px;
      background: transparent;

      span {
        color: #7d00ff;
        background: transparent;
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
`;

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
`;

export const PinkHeart = styled(FaHeart)`
  path {
    color: #ed1ca6;
  }
  width: 14px;
  height: 14px;
`;

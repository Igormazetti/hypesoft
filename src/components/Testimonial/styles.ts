import styled from 'styled-components'

export const Container = styled.section`
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  margin-top: 120px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h3 {
    font-size: 40px;
    line-height: 48px;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #7d00ff;
    }
  }
`

export const TestimonialWrapper = styled.div`
  display: flex;
  width: 100%;

  .testimonial {
    position: relative;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        0deg,
        rgba(223, 227, 235, 0.3),
        rgba(223, 227, 235, 0.3)
      ),
      #ffffff;

    width: 964px;
    height: 411px;

    border-radius: 4px;

    .rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 50px;
      position: absolute;
      background-color: transparent;

      img {
        background-color: transparent;
      }

      .star {
        width: 150px;
        height: 28px;
      }
    }

    p {
      padding: 50px 50px 0px;
      margin-top: 100px;
      background-color: transparent;
      color: #242424;

      font-weight: 400;
      font-size: 26px;
      line-height: 35px;

      @media screen and (max-width: 1025px) {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }

  .speakers {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .titles {
      display: flex;

      /* @media screen and (max-width: 1025px) {
        width: 150px;
        height: ;
      } */
    }

    .titles-content {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 312px;
      height: 100px;
      padding: 0 24px;

      background: linear-gradient(
          0deg,
          rgba(223, 227, 235, 0.3),
          rgba(223, 227, 235, 0.3)
        ),
        #ffffff;
      border-radius: 4px;

      &:hover {
        cursor: pointer;
      }

      .avatar {
        border-radius: 50%;
        background: #a5a5a5;
        width: 52px;
        height: 52px;
      }

      .names {
        display: flex;
        flex-direction: column;
        background-color: transparent;
      }

      .arrowContainer {
        position: relative;
        background-color: transparent;
      }

      .arrow {
        padding: 0px;
        background-color: white;
      }
    }

    h5 {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #242424;
      background-color: transparent;
    }

    p {
      color: #a5a5a5;
      background-color: transparent;
      font-size: 18px;
    }

    span {
      color: #ed1ca6;
      background-color: transparent;
    }
  }
`

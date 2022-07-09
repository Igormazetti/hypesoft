import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  object-fit: cover;

  width: 350px;
  height: 430px;
  border-radius: 8px 8px 8px 8px;
  background: linear-gradient(
      0deg,
      rgba(223, 227, 235, 0.4),
      rgba(223, 227, 235, 0.4)
    ),
    #ffffff;

  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #ed1ca6;
    .discuss {
      display: block;
    }
  }

  .principalimg {
    width: 100%;
    height: 332px;
    border-radius: 6px 6px 0px 0px;
  }

  p {
    margin-left: 24px;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;

    color: #242424;
    background: transparent;
  }

  .discuss-wrapper {
    position: absolute;
    bottom: 10px;
    margin-left: 24px;

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
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    background-color: transparent;
    text-decoration: none;
  }

  .seta {
    width: 32px;
    height: 20px;
    background-color: transparent;
  }
`;

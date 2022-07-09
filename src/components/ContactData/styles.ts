import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 48px;
  gap: 24px;

  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(10, 25, 49, 0.02);
  border-radius: 8px;
  color: #242424;

  h3 {
    color: #242424;
    background-color: transparent;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: transparent;
  width: 100%;

  div,
  img {
    color: #242424;
    background-color: transparent;
  }

  .data-content {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #242424;

    .img-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 25px;
      width: 80px;
      height: 80px;

      background: rgba(104, 79, 255, 0.1);
      border-radius: 1000px;
    }
  }

  .data-links {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
`;

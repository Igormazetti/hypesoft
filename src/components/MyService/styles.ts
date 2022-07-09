import styled from "styled-components";

export const Container = styled.section`
  padding: 67px 0 80px;
  height: 468px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

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
`;

export const CardsWrapper = styled.div`
  height: 351px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

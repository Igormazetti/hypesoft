import styled from "styled-components";

export const CustomLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 8px;

  width: 48px;
  height: 48px;
  border: 1px solid #dfe3eb;
  border-radius: 3px;

  background: #ffffff;
  transition: filter 0.2s;

  &:hover {
    background-color: #7d00ff;
    border: none;
    filter: brightness(0.8);
  }

  img {
    width: 30px;
    height: 30px;
    background-color: transparent;
  }
`;

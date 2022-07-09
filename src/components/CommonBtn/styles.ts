import styled from "styled-components";

interface BtnProps {
  width: string;
}

export const CommonButton = styled.button<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.width};
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #242424;

  font-weight: 600;
  font-size: 16px;
  line-height: 56px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #7d00ff;
    color: #ffffff;
  }

  svg {
    margin-left: 11px;
    background-color: transparent;
  }
`;

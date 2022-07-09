import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 15px;
  box-shadow: 2px -2px 0 1px #000 inset;
  border-width: 0 0 2px 2px;
  transform: rotate(45deg);
  z-index: 2;
  top: 35px;
  left: 12px;

  background: linear-gradient(
      0deg,
      rgba(223, 227, 235, 0.3),
      rgba(223, 227, 235, 0.3)
    ),
    #ffffff;
`;

import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 28px 0;
  background-color: transparent;

  div {
    display: flex;
    gap: 40px;

    a {
      z-index: 1;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      background-color: transparent;

      color: #fff;

      transition: filter 0.2s; // transição do filter mais leve

      &:hover {
        filter: brightness(
          0.85
        ); // escurecer o botão ao passar o mouse por cima
      }
    }
  }
`;

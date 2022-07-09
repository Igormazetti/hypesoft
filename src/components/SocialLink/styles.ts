import styled from 'styled-components'

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

  background: #fff;
  transition: filter 0.2s;

  svg {
    color: #fff;
    border: 0.5px solid #000;
    border-radius: 4px;

    path {
      fill: #fff;
    }
  }

  &:hover {
    background-color: #7d00ff;
    border: none;
    filter: brightness(0.9);
  }
`

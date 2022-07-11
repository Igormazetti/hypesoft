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
    background-color: transparent;
    border: none;
    border-radius: 4px;

    path {
      fill: #242424;
    }
  }

  &:hover {
    background-color: #7d00ff;
    border: none;
    filter: brightness(0.9);

    path {
      fill: #fff;
    }
  }
`

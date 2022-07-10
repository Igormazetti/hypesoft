import styled from 'styled-components'

export const Container = styled.section`
  padding: 100px 0;
  display: flex;
  gap: 24px;

  a {
    border-radius: 50%;
  }

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`

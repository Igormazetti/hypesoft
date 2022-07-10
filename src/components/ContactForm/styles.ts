import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px;
  gap: 24px;
  width: 100%;

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
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;

  background-color: transparent;

  label {
    background-color: transparent;

    @media screen and (max-width: 1025px) {
      display: block;
      width: 100%;
    }
  }

  div {
    background-color: transparent;
  }

  button {
    background-color: #7d00ff;
    color: #ffffff;
    line,
    polygon {
      color: #ffffff;
    }
    transition: filter 0.3s;

    &:hover:not([disabled]) {
      filter: brightness(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.6);
    }
  }

  #subjects {
    width: 100%;
  }

  input {
    color: #242424;
    background-color: transparent;
    padding: 14px 20px;
    box-sizing: border-box;

    height: 52px;

    border: 1px solid #dfe3eb;
    border-radius: 4px;

    &:focus {
      outline: 1px solid #7d00ff;
    }

    @media screen and (max-width: 1025px) {
      width: 100%;
    }
  }

  .inputs-container {
    display: flex;
    gap: 16px;
    width: 100%;

    @media screen and (max-width: 1025px) {
      justify-content: space-evenly;
    }
  }
  textarea {
    width: 100%;
    height: 152px;
    color: #242424;
    background-color: transparent;
    padding: 14px 20px;

    border: 1px solid #dfe3eb;
    border-radius: 4px;

    &:focus {
      outline: 1px solid #7d00ff;
    }
  }
`

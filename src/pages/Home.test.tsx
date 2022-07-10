import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '.'

describe('Testes da página Home', () => {
  it('Testa se a página Home é renderizada', () => {
    render(<Home />)
    const Component = screen.getByTestId('home')
    expect(Component).toBeInTheDocument()
  })
})

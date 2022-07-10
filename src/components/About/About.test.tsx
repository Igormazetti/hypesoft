import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente About', () => {
  it('testa se o componente About é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('about')
    expect(Component).toBeInTheDocument()
  })
})

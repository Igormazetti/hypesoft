import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('Testes do componente SelectedWork', () => {
  it('Testa se o componente SelectedWork é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('selected-work')
    expect(Component).toBeInTheDocument()
  })
})

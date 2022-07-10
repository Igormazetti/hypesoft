import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('Testes do componente Testimonial', () => {
  it('Testa se o componente Testimonial é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('testimonial')
    expect(Component).toBeInTheDocument()
  })
  it('testa se o texto da Laise inicia na tela', () => {
    render(<Home />)

    const laiseText = screen.getByText(/paciente e sabe lidar/i)
    expect(laiseText).toBeInTheDocument()
  })
  it('testa se ao clicar no nome da pessoa muda o texto na tela', () => {
    render(<Home />)
    const cleyton = screen.getByText(/cleyton alves/i)
    act(() => {
      userEvent.click(cleyton)
    })
    const cleytonText = screen.getByText(/um grande desenvolvedor/i)
    expect(cleytonText).toBeInTheDocument()

    const shantanu = screen.getByText(/shantanu narayen/i)
    act(() => {
      userEvent.click(shantanu)
    })
    const shantanuText = screen.getByText(/dolor sit amet/i)
    expect(shantanuText).toBeInTheDocument()
  })
})

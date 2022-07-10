import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '.'

describe('testes da página Home', () => {})

describe('testes da seção Testimonials', () => {
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

describe('testes da seção Contact', () => {
  it('testa se o botão de enviar mensagem inicia desabilitado', () => {
    render(<Home />)
    const sendBtn = screen.getByText(/send message/i)
    expect(sendBtn).toBeDisabled()
  })
  it('testa se ao preencher todos os campos o botão fica abilitado', () => {
    render(<Home />)

    const nome = screen.getByPlaceholderText(/full name/i)
    const email = screen.getByPlaceholderText(/email adress/i)
    const subjects = screen.getByPlaceholderText(/subjects/i)
    const message = screen.getByPlaceholderText(/message/i)

    fireEvent.change(nome, { target: { value: 'Igor Mazetti' } })
    fireEvent.change(email, { target: { value: 'iigormazetti@hotmail.com' } })
    fireEvent.change(subjects, { target: { value: 'Contratação' } })
    fireEvent.change(message, {
      target: {
        value: 'Estamos entrando em contato para saber mais do seu trabalho',
      },
    })

    const sendBtn = screen.getByText(/send message/i)
    expect(sendBtn).not.toBeDisabled()
  })
  it('testa se ao clicar no botão os valores dos inputs são resetados', () => {
    render(<Home />)

    const nome = screen.getByPlaceholderText(/full name/i)
    const email = screen.getByPlaceholderText(/email adress/i)
    const subjects = screen.getByPlaceholderText(/subjects/i)
    const message = screen.getByPlaceholderText(/message/i)

    fireEvent.change(nome, { target: { value: 'Igor Mazetti' } })
    fireEvent.change(email, { target: { value: 'iigormazetti@hotmail.com' } })
    fireEvent.change(subjects, { target: { value: 'Contratação' } })
    fireEvent.change(message, {
      target: {
        value: 'Estamos entrando em contato para saber mais do seu trabalho',
      },
    })

    const sendBtn = screen.getByText(/send message/i)
    fireEvent.click(sendBtn)

    expect(nome).toHaveValue('')
    expect(email).toHaveValue('')
    expect(subjects).toHaveValue('')
    expect(message).toHaveValue('')
  })
})

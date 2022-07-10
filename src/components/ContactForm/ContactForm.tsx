import { FiSend } from 'react-icons/fi'
import { FC, useState, useEffect } from 'react'

import { CommonButton } from '../CommonBtn'

import { Container, Form } from './styles'

export const ContactForm: FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [btnDisabled, setButtonDisabled] = useState(true)

  const resetData = () => {
    setEmail('')
    setName('')
    setSubject('')
    setMessage('')
  }

  const verifyEmail = (em: string) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    return emailRegex.test(em)
  }

  useEffect(() => {
    const handleVerification = () => {
      if (
        verifyEmail(email) &&
        name.length > 3 &&
        subject.length >= 5 &&
        message.length > 0
      ) {
        setButtonDisabled(false)
      } else {
        setButtonDisabled(true)
      }
    }
    handleVerification()
  }, [email, name, subject, message])

  return (
    <Container data-testid="contact-form">
      <h3>Let me know here.</h3>
      <Form>
        <div className="inputs-container">
          <label htmlFor="fullname">
            <input
              type="text"
              name="fullname"
              id="fullname"
              max="70"
              placeholder="Full Name"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
          </label>

          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              max="70"
              placeholder="Email Adress"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </label>
        </div>
        <label htmlFor="subjects">
          <input
            type="text"
            name="subjects"
            id="subjects"
            max="100"
            placeholder="Subjects"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
          />
        </label>

        <label htmlFor="">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            value={message}
            onChange={e => {
              setMessage(e.target.value)
            }}
          ></textarea>
        </label>
        <CommonButton
          width="229px"
          text="SEND MESSAGE"
          icon={FiSend}
          disabled={btnDisabled}
          onClick={resetData}
        />
      </Form>
    </Container>
  )
}

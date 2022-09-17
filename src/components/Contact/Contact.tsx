import { SectionTitle } from '../SectionTitle/SectionTitle'
import { ContactForm, Container, ButtonSubmit } from './styles'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null)
  const successNotification = () => toast.success('Obrigado pela sua mensagem!')
  const errorNotification = () => toast.error('Ops! Algo deu errado!')

  const sendEmail = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_OUR_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text)
          successNotification()
        },
        (error) => {
          console.log(error.text)
          errorNotification()
        },
      )
  }

  return (
    <Container id="contact">
      <SectionTitle text="Contato" />
      <ContactForm ref={form} id="contact-form" onSubmit={sendEmail}>
        <label htmlFor="from_name">Nome</label>
        <input type="text" name="from_name" placeholder="John Doe" required />
        <label htmlFor="from_email">E-mail</label>
        <input
          type="email"
          name="from_email"
          placeholder="johndoe@email.com"
          required
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={7}
          placeholder="Escreva sua mensagem aqui..."
          required
        ></textarea>
        <ButtonSubmit type="submit" form="contact-form">
          Enviar e-mail
        </ButtonSubmit>
      </ContactForm>
      <ToastContainer />
    </Container>
  )
}

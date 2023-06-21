import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='flex justify-center md:w-1/2 m-auto'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='flex flex-col w-full gap-4'
      >
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Your name</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full focus:bg-slate-300 focus:text-black'
            name='user_name'
            required
            maxLength={100}
          />
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Your Email</span>
          </label>
          <input
            type='email'
            className='input input-bordered w-full focus:bg-slate-300 focus:text-black'
            name='user_email'
            required
            maxLength={100}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Your Message</span>
          </label>
          <textarea
            className='textarea textarea-bordered h-24 focus:bg-slate-300 focus:text-black'
            name='message'
            placeholder=''
            maxLength={300}
            minLength={3}
          ></textarea>
        </div>
        <input type='submit' value='Send' className='btn w-full btn-primary' />
      </form>
    </div>
  )
}

export default ContactForm

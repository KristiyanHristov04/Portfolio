import React, { useRef } from 'react';
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import * as MUI from '@mui/material';
import './ContactMe.css'

export const ContactMe = () => {
  const form = useRef();

  const [fromName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const inputFields = Array.from(document.getElementsByTagName('input'));
    inputFields.pop();
    const textarea = document.getElementById('filled-multiline-static');

    const templateParams = {
      from_name: fromName,
      user_name: fromName,
      user_email: userEmail,
      message: message
    }

    emailjs.send('service_dx576qe', 'template_7zzuktd', templateParams, 'd9az0NNH-lBjOidGl')
      .then((result) => {
        inputFields.forEach(input => input.value = '');
        textarea.value = '';
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <MUI.TextField id="filled-basic" label="Username" variant="filled" name="user_name" required type='text' autoComplete='off' onChange={(e) => setName(e.target.value)} />
      <MUI.TextField id="filled-basic" label="Email" variant="filled" name="user_email" required type='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
      <MUI.TextField
        id="filled-multiline-static"
        label="Message"
        multiline
        rows={4}
        variant="filled"
        name="message"
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
    </form>
  );
};
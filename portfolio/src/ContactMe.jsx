import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as MUI from '@mui/material';
import './ContactMe.css'

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const inputFields = Array.from(document.getElementsByTagName('input'));
    inputFields.pop();
    const textarea = document.getElementById('filled-multiline-static');

    emailjs.sendForm('service_dx576qe', 'template_7zzuktd', form.current, 'd9az0NNH-lBjOidGl')
      .then((result) => {
          inputFields.forEach(input => input.value = '');
          textarea.value = '';
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <MUI.TextField id="filled-basic" label="Username" variant="filled" name="user_name" required type='text' autoComplete='off' />
      <MUI.TextField id="filled-basic" label="Email" variant="filled" name="user_email" required type='email' autoComplete='off' />
      <MUI.TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="filled"
          name="message"
          required
        />
      <input type="submit" value="Send" />
    </form>
  );
};
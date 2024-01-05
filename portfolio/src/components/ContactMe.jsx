import React, { useRef } from 'react';
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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
        handleClick()
      }, (error) => {
        console.log(error.text);
      });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Stack spacing={2} sx={{ width: '100%' }} style={{position: 'absolute'}}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Stack>
    </form>
  );
};
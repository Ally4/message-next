import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import axios from 'axios'
import styles from '../styles/Home.module.css'
// import { TextField, Box, Button } from '@material-ui/core';

export default function Home() {


  const [numbers, setNumbers] = useState('');
  const [message, setMessage] = useState('');


  const [post, setPost] = React.useState(null);


  function sendingMessage() {
    axios
    .post(baseURL, {
      title: "Hello World!",
      message: "This is a new post."
    })
    .then((response) => {
      setPost(response.data);
    });
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Send messages with PiSquare</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to PiSquare limited sending messages app
          <div>
          <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'block' }}
            >
              <>
                <input
                  // className={becomePartnerStyles.textfield}
                  type="text"
                  variant="outlined"
                  size="medium"
                  fullWidth={true}
                  label="Numbers"
                  value={numbers}
                  placeholder="Enter a phone number or phone numbers"
                  onChange={(e) => setNumbers(e.target.value)}
                />
              </>
              <>
                <input
                  // className={becomePartnerStyles.textfield}
                  type="text"
                  variant="outlined"
                  size="medium"
                  fullWidth={true}
                  label="Message"
                  value={message}
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </>
              <button
                variant="contained"
                // style={{ marginTop: '3rem' }}
                onClick={sendingMessage}
              >
                Send The message(s)
              </button>
            </form>
          </div>
        </h1>
        </main>
    </div>
  )
}

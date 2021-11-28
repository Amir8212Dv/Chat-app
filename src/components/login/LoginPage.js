/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
// Firebase authentication
import app from './Firebase';
// CSS
import styles from '../../styles/Login.module.css'
// Component
import loginWIthEmail from './emailAuthentication';
// google Icon
import google from '../../icon/google.svg'



const LoginPage = () => {
    localStorage.clear()
    
    const history = useHistory()
    const [error , setError] = useState(false)


    return (
        
        <div className={styles.loginPage}>
            <div className={styles.container}>
                <p className={styles.title}>Welcom to my chat</p>
                <div className={styles.gmail} onClick={() => {
                    loginWIthEmail(setError , history)
                }}>
                    <img src={google} alt='google' />
                    <p>Sign in with google</p>
                </div>
                
                <p className={styles.error}>{error && 'Please check your connection !'}</p>
            </div>
        </div>
    );
};

export default LoginPage;
import React from 'react';
import { useHistory } from 'react-router-dom';
// CSS
import styles from '../../styles/Navbar.module.css'
// Method
import  signout  from './Signout';

const Navbar = () => {
    const history = useHistory()
    return (
        <div>
            <div className={styles.container}>
                <p className={styles.name}>Chat app</p>
                <button className={styles.logout} onClick={() => signout(history)}>Log out</button>
            </div>
        </div>
    );
};

export default Navbar;
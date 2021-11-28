import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const loginWIthEmail = (setError , history) => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
    .then(async (result) => {
        const user = result.user;
        localStorage.setItem('name' , user.displayName)
        localStorage.setItem('uid' , user.uid)
        localStorage.setItem('email' ,user.email)
        localStorage.setItem('image' , user.photoURL)
        history.push('/chat')
        
  }).catch((error) => {
    setError(error.message)
  });
}



export default loginWIthEmail
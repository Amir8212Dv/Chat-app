import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import api from "../chat/chatEngineAPI";

const loginWIthEmail = (setError , history) => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
    .then(async (result) => {
        const user = result.user;
        await localStorage.setItem('name' , user.displayName)
        await localStorage.setItem('uid' , user.uid)
        await localStorage.setItem('email' ,user.email)
        api(history)
        
  }).catch((error) => {
    setError(error.message)
  });
}



export default loginWIthEmail
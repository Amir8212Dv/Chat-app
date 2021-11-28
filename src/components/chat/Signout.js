import { getAuth, signOut } from "firebase/auth";

const signout = (history) => {
    const auth = getAuth();

    signOut(auth).then(() => {
        localStorage.clear()
        history.push('/login')
    })
}

export default signout
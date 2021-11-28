import React , {useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// Method
import api from '../chat/chatEngineAPI'

export const setContext = React.createContext()

const Context = ({children}) => {

    const [error , setError] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('name') && history.location.pathname !== '/login' && !error) {
            api( history)
        } else {
            history.push('/login')
        }
    
    } , [error, history])
    

    return (
        <setContext.Provider value={{error , setError , history }}>
            {children}
        </setContext.Provider>
    );
};

export default Context;
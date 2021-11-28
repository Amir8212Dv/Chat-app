import axios from 'axios'

const api = (history) => {
    const name = localStorage.getItem('name')
    const uid = localStorage.getItem('uid')
    const email = localStorage.getItem('email')
   

    axios.get('https://api.chatengine.io/users/me' , { // Checks user exists or not
        headers : {
            'project-id' : 'f7873ee9-c75f-444f-8ca6-5ae6c5996f28',
            'user-name' : name,
            'user-secret' : uid 
            }
    }).then(() => history.push('/chat'))

    .catch(() => {  // if user not exists , adds user to database
        const config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': '{{ca28bad1-ab17-48c3-9bc7-1402ec5f8594}}'
            },
            data : {
                "username": name,
                "secret": uid,
                "email": email
            }
        };
    
        axios(config).then(() => {
            history.push('/chat')
        })
    })
}

export default api
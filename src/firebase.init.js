import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyApcVnT5hYs8QBOjPQxSr4TtIB8ft9mchI',
    authDomain: 'to-do-5bb2a.firebaseapp.com',
    projectId: 'to-do-5bb2a',
    storageBucket: 'to-do-5bb2a.appspot.com',
    messagingSenderId: '216569238200',
    appId: '1:216569238200:web:13e5febd3a77657e9a1a4d',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth

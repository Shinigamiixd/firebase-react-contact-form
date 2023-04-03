import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDWfP5Ko6PKgtFsEGkShD83-eJZZi1RkFo",
    authDomain: "fir-react-contact-form.firebaseapp.com",
    databaseURL: "https://fir-react-contact-form-default-rtdb.firebaseio.com",
    projectId: "fir-react-contact-form",
    storageBucket: "fir-react-contact-form.appspot.com",
    messagingSenderId: "132371556506",
    appId: "1:132371556506:web:6a3ec614945eaea6609723",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCnEvotE_vPRyvHEh3Yht-kTux_sR-HCEM",
    authDomain: "tiendadebuceo-beab5.firebaseapp.com",
    projectId: "tiendadebuceo-beab5",
    storageBucket: "tiendadebuceo-beab5.appspot.com",
    messagingSenderId: "673307807107",
    appId: "1:673307807107:web:2d94469b98ce6e0d247ab6"
}


const app = initializeApp(firebaseConfig)

export const initFirestore = () => {
    return app
}
const firebaseConfig = {
    apiKey: "AIzaSyBJmY-E9T6xLnAmC_fQ_iBWRuLlp88-nqc",
    authDomain: "tftdragonball.firebaseapp.com",
    projectId: "tftdragonball",
    storageBucket: "tftdragonball.firebasestorage.app",
    messagingSenderId: "50011925625",
    appId: "1:50011925625:web:d24a30ae1bd4043cd8b8a8"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

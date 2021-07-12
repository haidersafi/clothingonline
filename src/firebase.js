import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyAjS3MnB2Gi4XiVnszqN_ljqk1nUyLD4Hw",
    authDomain: "clothingol.firebaseapp.com",
    projectId: "clothingol",
    storageBucket: "clothingol.appspot.com",
    messagingSenderId: "199994983880",
    appId: "1:199994983880:web:e77c5fdb900e258d8b2cfd",
    measurementId: "G-ZZFH1P018H"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const fireStore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider).then(result=>console.log(result.user.displayName));
  export const createEmailPassword=async(userAuth,...additionalData)=>{
if(!userAuth){return};
const userRef= await fireStore.doc(`users/${userAuth.uid}`);
const snapShot= await userRef.get();
if (!snapShot.exists){
  const {displayName,email}=userAuth;
  const createdAt=new Date();
  try{
    await userRef.set({displayName,email,createdAt,...additionalData})
  }
  catch(err){console.log(err)}
}
return userRef;
  }
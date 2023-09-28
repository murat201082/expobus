

import {  
  getReactNativePersistence,  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
 


} from 'firebase/auth';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';        

import { initializeApp } from "firebase/app";





const firebaseConfig = {
  apiKey: "AIzaSyAJj2FhJQ0wvAq9gbBj5EifthxclGQLE24",
  authDomain: "busproject-90c7c.firebaseapp.com",
  projectId: "busproject-90c7c",
  storageBucket: "busproject-90c7c.appspot.com",
  messagingSenderId: "645371439655",
  appId: "1:645371439655:web:32ddf2f2363fed1f4ebc02"
};


const app = initializeApp(firebaseConfig);




const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const createUser = async (email, password, navigation, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log(userCredential);
    navigation.navigate('TurnAndBack');
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigation) => {
  try {
    const signInCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
      
    );
    console.log(signInCredential);
    navigation.navigate("TurnAndBack");
    
  } catch (err) {
    alert(err.message);
    navigation.navigate('Register');
  }
};

export const logOut = (navigation) => {
  auth.signOut()
    .then(() => {
      alert('Logged out successfully');
      navigation.navigate('Login');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};







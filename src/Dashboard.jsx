//import React, { useEffect, useState } from "react";
import React from 'react';
import {signOut} from "firebase/auth"
import "./Dashboard.css";
import {auth} from "./firebase"
//import { auth, db, logout } from "./firebase";


const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

export default function Dashboard (email, password) {
    return( 
    <div> 
        <h1>A ver...</h1>
        <button className='btnSignOut' onClick={logOut}>Salir</button>

    </div>
    )
}  


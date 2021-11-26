//import React, { useEffect, useState } from "react";
import React from 'react';
import "./Dashboard.css";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard (email, password) {
    const navigate = useNavigate();
    const auth = getAuth();
    const LogOut = () => {
    
        
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
          console.error(error);
        });
    
      };
    return( 
        <div LogOut={LogOut}> 
        <h1>A ver...</h1>
        <button className='btnSignOut' onClick={LogOut}>Salir</button>

    </div>
    )
}  


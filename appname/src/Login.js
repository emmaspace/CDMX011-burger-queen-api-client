import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
        if(loading) {

            return;
        }
        if(user) history.replace("/dashboard");
    }, [user, loading]);
    return (
        <main className="login">
            <form className="login__container">
                <label for="email">Email</label>
                <input id="email" type="email" className="login__textBox" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escribe tu correo"
                    />
                <label for="password">Contraseña</label>
                <input id="password" type="password" className="login__textBox"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Escribe tu contraseña" />
                <button className= "login__btn" onClick={() => signInWithEmailAndPassword(email, password)}
                >Acceder</button> 
            </form>
        </main>
    )
}

export default Login;
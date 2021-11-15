import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.js"
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 // const [error] = useAuthState(getAuth);
  const history = useNavigate();

  //const auth = getAuth();

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sí jalo")
        history('/dashboard');
      })
      .catch(() => {
        console.log("No jalo")
        setError('Contraseña y/o correo inválidos');
        console.log(error,setError);
      });
  };
  /*     useEffect(() => {
        if(loading) {

            return;
        }
        if(user) history.replace("/dashboard");
    }, [user, loading]); */
  return (
    <main className="login">
      <form className="login__container">
        <label >Email</label>
        <input
          id="email"
          type="email"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Escribe tu correo"
        />
        <label >Contraseña</label>
        <input
          id="password"
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Escribe tu contraseña"
        />
        <Link to="/dashboard">
        <button
          className="login__btn"
          onClick={() => signIn(email, password)}
        >
          Acceder
        </button>
        </Link>
      </form>
    </main>
  );
}

export default Login;

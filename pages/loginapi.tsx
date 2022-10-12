import axios from "axios";

import React, { useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  //pode reutilizar em outras aplicacoes.
  const login = async (email: string, password: string) => {
    //pegar o csrf
    //validar as credentials
    //verificar o session

    const csrfReq = await axios.get("/api/auth/csrf");
    if (csrfReq.data.csrfToken) {
      const authReq = await axios.post("/api/auth/callback/credentials", {
        json: true,
        csrfToken: csrfReq.data.csrfToken,
        email,
        password,
      });
      if (authReq.status === 200) {
        const userData = await axios.get("/api/auth/session");
        if (userData.data.user) {
          return true;
        }
      }
    }
    return false;
  };

  const handleSubmit = async () => {
    if (!email || !password) return setErrorText("Preencha os campos");

    setErrorText("");
    const logged = await login(email, password);

    if (logged) {
      window.location.href = "/";
    } else {
      setErrorText("Acesso negado");
    }
  };

  return (
    <Layout>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
        {errorText && <p>Acesso Negado!</p>}
      </div>
    </Layout>
  );
};

export default Login;

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async () => {

    if (!email || !password) return setErrorText("Preencha os campos");
    
    const request = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (request && request.ok) {
      if (router.query.callbackUrl) {
        router.push(router.query.callbackUrl as string);
      } else {
        router.push("/");
      }
    } else {
      setErrorText("Acesso Negado");
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

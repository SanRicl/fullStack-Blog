import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 30px;
  width: 300px;
`;
const Button = styled.div`
  height: 30px;
  width: 300px;
  background: #fff;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
`;

const Login = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmedPassword) return setErrorText("Preencha os campos");

    if (password !== confirmedPassword) return setErrorText("Senhas nao coincidem");

    const request = await axios.post("/api/users", {
      name,
      email,
      password,
    });

    if (request.status === 201) router.push("/api/auth/signin");
    
    if(request.data.message) return setErrorText(request.data.message);
  };

  return (
    <Layout>
      <Container>
      <Input
          type="text"
          value={name}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          value={confirmedPassword}
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>Registrar</Button>
        {errorText && <p>{errorText}</p>}
      </Container>
    </Layout>
  );
};

export default Login;

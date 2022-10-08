import React, { useState } from "react";
import Layout from "../../components/Layout";

import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  width: 100px;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const InputField = styled.input`
  height: 40px;
  padding: 10px;
  width: 100%;
`;

const Usuarios = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = async () => {
    if (username && email) {
      const json = await axios.post("/api/users", {
        name: username,
        email: email,
      });

      if (json.data.message) {
        alert(json.data.message);
      } else {
        router.push("/usuarios");
      }
    }
  };

  return (
    <Layout>
      <Component>
        <InputField
          type="text"
          value={username}
          placeholder="nome de usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="text"
          value={email}
          placeholder="nome de usuario"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleAddUser}>Adcionar</Button>
      </Component>
    </Layout>
  );
};

export default Usuarios;

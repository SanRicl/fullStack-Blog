import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import { api } from "../libs/api";
import { Users } from "../types/Users";

type Props = {
  users: Users[];
};

const usuarios = ({ users }: Props) => {
  return (
    <Layout>
      <div>
        <ul>
          {users.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default usuarios;

export const getServerSideProps = async () => {
  const users = await api.getAllUsers(0);
  return {
    props: {
      users,
    },
  };
};

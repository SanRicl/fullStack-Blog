import React, { useState } from "react";
import Layout from "../../components/Layout";
import { api } from "../../libs/api";
import { Users } from "../../types/Users";

import styled from "styled-components";
import Link from "next/link";
import axios from "axios";

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
`;

type Props = {
  users: Users[];
};

const Usuarios = ({ users }: Props) => {
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState<Users[]>(users);
  const [showMore, setShowMore] = useState(true);

  const handleLoadMore = async () => {
    if (!loading) {
      setLoading(true);

      const json = await axios.get(`/api/users?page=${pageCount + 1}`);

      setUserList([...userList, ...json.data]);
      if (json.data.length === 0) {
        setShowMore(false);
      }
      setPageCount(pageCount + 1);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div>
        <ul>
          {userList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        {showMore && <Button onClick={handleLoadMore}>Carregar mais</Button>}
        <Link href="/usuarios/novo" passHref>
          <Button>adcionar novo usuario </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Usuarios;

export const getServerSideProps = async () => {
  const users = await api.getAllUsers(0);
  return {
    props: {
      users,
    },
  };
};

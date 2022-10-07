/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { Users } from "../../utils/users";

import styled from "styled-components";

const Container = styled.div`
 padding: 0px 20px;
`;

const SobreItem = () => {
  return (
    <Layout>
      <Container>
        <h3>Pagina sobre: </h3>
        {Users.map((item) => (
          <ul key={item.id}>
            <Link href={`/sobre/${encodeURIComponent(item.name)}`}>
              <li>{item.name}</li>
            </Link>
          </ul>
        ))}
      </Container>
    </Layout>
  );
};

export default SobreItem;

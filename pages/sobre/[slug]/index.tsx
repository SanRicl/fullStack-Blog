import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import styled from "styled-components";

const Container = styled.div`
 padding: 0px 20px;
`;
const Idade = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>

    <Container>
      {slug} 
    </Container>
    </Layout>
  );
};

export default Idade;

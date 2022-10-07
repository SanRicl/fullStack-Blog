import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const Idade = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>

    <div>
      {slug} 
    </div>
    </Layout>
  );
};

export default Idade;

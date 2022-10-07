// STATIC SITE GENERATED SIMPLE METHOD

import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

import { Post } from "../../types/Post";

import styled from "styled-components";

const Container = styled.div`
 padding: 0px 20px;
`;

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  return (
    <Layout>
    <Container>
      <h1>Blog</h1>
      {posts.map((posts) => (
        <div key={posts.id}>
          <ul>
            <li>
              <Link href={`blog/${posts.id}`}>{posts.title}</Link>
            </li>
          </ul>
        </div>
      ))}
    </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
    // Esta opcao de revalidate fica indicando que a cada 7200 segundos, ele fara uma requisicao para o servidor. Para nao ter que ficar fazendo diversas requisicoes todo o momento.
    revalidate: 7200,
  };
};

export default Blog;

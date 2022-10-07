import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../../components/Layout";
import { Post } from "../../../types/Post";
import styled from "styled-components";

const Container = styled.div`
 padding: 0px 20px;
`;
type Props = {
  post: Post;
};

const Posts = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Container>
    </Layout>
  );
};

interface Iparams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Iparams;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default Posts;

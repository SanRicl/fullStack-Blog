import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../../components/Layout";
import { Post } from "../../../types/Post";

type Props = {
  post: Post;
};

const Posts = ({ post }: Props) => {
  return (
    <Layout>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
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

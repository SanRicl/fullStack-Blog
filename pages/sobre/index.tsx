/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { Users } from "../../utils/users";

const SobreItem = () => {
  return (
    <Layout>
      <div>
        <h1>Pagina sobre: </h1>
        {Users.map((item) => (
          <ul key={item.id}>
            <Link href={`/sobre/${encodeURIComponent(item.name)}`}>
              <li>{item.name}</li>
            </Link>
          </ul>
        ))}
      </div>
    </Layout>
  );
};

export default SobreItem;

import React, { ReactElement } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import styled from "styled-components";

type Props = {
  children: ReactElement;
};
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  background: #c3c3c3;
`;

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  text-align: center;
  margin: 0px 20px;
  border-top: 3px solid black;
`;
const Title = styled.h4`
  padding: 20px 0px;
`;

const Footer = () => {
  return (
    <FooterComponent>
      <Title>Todos os direitos Reservados</Title>
    </FooterComponent>
  );
};

export default Footer;

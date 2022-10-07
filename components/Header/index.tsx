import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-size: 2rem;
  margin: 0px 20px;
  border-bottom: 3px solid black;
`;
export const Title = styled.h1`
  padding: 30px 0px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>MyBlog</Title>
    </HeaderContainer>
  );
};

export default Header;

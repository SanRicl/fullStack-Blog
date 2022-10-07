import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navigationLinks } from "../../utils/data";

import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  display: flex;
`;

const LinkItem = styled.li`
  padding: 20px;
`;

const ItemRef = styled("a")<{ active: boolean }>`
  font-size: 1.2rem;
  border-bottom: 1px solid ${(props) => (props.active ? "red" : "black")};
  color: ${(props) => (props.active ? "red" : "black")};
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      {navigationLinks.map((item, index) => (
        <LinkItem key={index}>
          <Link href={item.path[0]} passHref>
            <ItemRef active={item.path.includes(router.pathname) === true}>
              {item.label}
            </ItemRef>
          </Link>
        </LinkItem>
      ))}
    </Container>
  );
};

export default Navbar;

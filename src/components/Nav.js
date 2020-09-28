import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading } from "@chakra-ui/core";

const Nav = () => (
  <Flex as="header" justify="space-between" p={4} bg="blue.300" color="white">
    <nav>
      <Link to="/">To Do</Link>
      <Link to="/archive">Archive</Link>
    </nav>
    <Heading as="span" size="sm"><Link to="/">My ToDo</Link></Heading>
  </Flex>
)

export default Nav
import React from 'react'
import { Flex } from '@chakra-ui/core'
import Nav from './Nav'

const Layout = props => (
  <>
    <Nav />
    <Flex as="main" direction="column" align="center" w="100%" p={4}>
      {props.children}
    </Flex>
  </>
);

export default Layout
import { Heading, List, ListItem } from '@chakra-ui/core'
import React from 'react'
import { AddTaskModal } from '../components/Tasks'

const ToDo = props => (
  <>
    <Heading as="h1" size="xl">ToDo</Heading>
    <AddTaskModal handleCreate={props.handleCreate} />
    <List mt={2} minW={400} spacing={1}>
      {props.todo.map(val => <ListItem 
        p={2}
        border="1px"
        borderRadius="md"
        borderColor="gray.200"
      >
        {val}
      </ListItem>)}
    </List>
  </>
)

const Archive = () => (
  <>
    <Heading as="h1" size="xl">Archive</Heading>
  </>
)

export { ToDo, Archive };
import { Heading } from '@chakra-ui/core'
import React from 'react'
import { AddTaskModal, ListTasks } from '../components/Tasks'

const ToDo = props => (
  <>
    <Heading as="h1" size="xl">ToDo</Heading>
    <AddTaskModal handleCreate={props.handleCreate} />
    <ListTasks 
      todo={props.todo}
      isToDoPage={true}
      handleDelete={props.handleDelete} 
      handleArchive={props.handleArchive}
    />
  </>
)

const Archive = (props) => (
  <>
    <Heading as="h1" size="xl">Archive</Heading>
    <ListTasks 
      todo={props.todo}
      isToDoPage={false}
      handleDelete={props.handleDelete} 
    />
  </>
)

export { ToDo, Archive };
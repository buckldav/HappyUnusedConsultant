import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  List, ListItem, Flex, IconButton,
  useDisclosure, Button, FormControl, FormLabel, Input
} from "@chakra-ui/core";

const AddTaskModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const submitForm = (e) => {
    e.preventDefault()
    props.handleCreate(document.getElementById("task").value)
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Add Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={submitForm}>
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="task">New task</FormLabel>
                <Input type="task" id="task" aria-describedby="add a task" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
              <Button variantColor="blue" mr={3} type="submit">
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

const ListTasks = props => (
  <List mt={2} minW={400} spacing={1}>
    {props.todo.map((val, i) => <ListItem 
      p={2}
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
    >
      <Flex align="center" justify="space-between">
        <span>{val}</span>
        <span>
          {props.isToDoPage ? <IconButton
            variantColor="green" 
            aria-label="Complete" 
            icon="check" 
            mr={2}
            onClick={() => {props.handleArchive(val, i)}} 
          /> : null}
          <IconButton 
            variantColor="red" 
            aria-label="Delete" 
            icon="delete" 
            onClick={() => {props.handleDelete(i)}} 
          />
        </span>
      </Flex>
    </ListItem>)}
  </List>
)

export { AddTaskModal, ListTasks }
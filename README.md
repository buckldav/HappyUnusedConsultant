### 1. Chakra Integration
* Chakra [Getting Started](https://chakra-ui.com/getting-started)
```bash
yarn add @chakra-ui/core @emotion/core @emotion/styled emotion-theming
```
Include ```customTheme```, ```Theme Provider```, and ```CSSReset```

#### Theming
##### Fonts
* Use the ```<link>``` in the HTML instead of CSS ```@import```
```javascript
fonts: {
  heading: "",
  body: "",
  mono: "",
},
```
##### Colors
* Show them the brand colors example
```javascript
colors: {
  ...theme.colors,
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    // ...
  },
}
```

### 2. Layout and Nav
Make a Layout.js, explain props

Refactor Nav to live in Layout.js
Use Flex to make a better Nav
```javascript
const Nav = () => (
  <Flex id="header" justify="space-between" p={4} bg="blue.300" color="white">
    <nav>
      <Link to="/">To Do</Link>
      <Link to="/archive">Archive</Link>
    </nav>
    <Heading as="span" size="sm"><Link to="/">My ToDo</Link></Heading>
  </Flex>
)
```

### 3. Rewrite page names
```javascript
<Route exact path="/">
  <ToDo />
</Route>
<Route path="/archive">
  <Archive />
</Route>
```

### 2. State and props

[Here's some diagrams about state and props](https://docs.google.com/document/d/1xKHi-iygRBYHpGHbY5e9AbTVJ8HULHZMJMcPVcCs4xY/edit)

1. Refactor App.js to be a class component with a state in the constructor.

```javascript
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: []
    }
  }

  handleCreate(value) {
    console.log(value)
  }

  render() {
    return (
      ...
    )
  }
} 
```

2. New file: Tasks.js in components/. Create functional component: AddTaskModal from [here](https://chakra-ui.com/modal).
  * Make a form, pass in the handleCreate in props. [Chakra Form Control](https://chakra-ui.com/formcontrol).
  * Pass the handleCreate in ```props -> ToDo -> AddTaskModal```.
```javascript
// AddTaskModal component in Tasks.js
...
const submitForm = (e) => {
  e.preventDefault()
  props.handleCreate(document.getElementById('task').value)
  onClose()
}
...
<form onSubmit={submitForm}>
  <ModalBody>
    <FormControl>
      <FormLabel htmlFor="task">New Task</FormLabel>
      <Input type="text" id="task" aria-describedby="add a task" />
    </FormControl>
  </ModalBody>

  <ModalFooter>
    <Button variant="ghost" onClick={onClose}>Cancel</Button>
    <Button variantColor="blue" mr={3} type="submit">
      Add
    </Button>
  </ModalFooter>
</form>
...
```

3. Show all the Tasks using ```Array.map``` and [Chakra List](https://chakra-ui.com/list).

```javascript
const ToDo = (props) => (
  <>
    <Heading as="h1" size="xl">ToDo</Heading>
    <AddTaskModal handleCreate={props.handleCreate} />
    <List mt={2} minW={400} spacing={1}>
      {props.todo.map(val => <ListItem p={2} border="1px" borderRadius="md" borderColor="gray.200">{val}</ListItem>)}
    </List>
  </>
)
```
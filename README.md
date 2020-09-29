### 1. Chakra Integration
1. Chakra [Getting Started](https://chakra-ui.com/getting-started)
```bash
npm install @chakra-ui/core @emotion/core @emotion/styled emotion-theming
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


*later: App will have state, pass everything as props down below*
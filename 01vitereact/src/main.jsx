import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//we can also import jsx library for getting diff syntax to create react elements
import { jsx } from 'react/jsx-runtime'
//since app is a function we can also declare it directly
function MyApp() {
  return <h1>Hello World</h1>
}

//now we will try to render the reactElement 
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//this is another way to create a react element using JSX syntax
const AnotherReactElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

//inserting variable
const anotherUser="John Doe";
//the proper syntax to render a React component is to use the createElement method or JSX syntax
const ReactEle=React.createElement(
  'a',//type of element
  { href: 'https://google.com', target: '_blank' }, //props if we dont want to set attribute then keep it empty
  'Click me to visit google',//children
  anotherUser
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>//for normal syntax
  //   <App />
  // </StrictMode>,
  // <MyApp /> =>using the function directly this is using the bundler to render the component directly without the need for React.StrictMode
  //MyApp()=>our function can be called in this manner also but this is not the recommended way to render components in React (it is just a demonstration of how functions can be used directly without JSX syntax
  //The element present below is injected using babel and is a valid React element
  //ReactElement=> we can not do this because ReactElement is not a function, it is an object that represents a React element, we need to use React.createElement or JSX syntax to render it properly.
  // AnotherReactElement=>we can use this directly because it is a valid JSX syntax and will be transpiled to a React element by the bundler (like Vite or Webpack)
  //ReactEle =>this is the proper way to render a React element using React.createElement method
  <App/>

)

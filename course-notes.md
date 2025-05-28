What is one of the things which make ReactJS blazingly fast? It's virtual DOM.

Now, what is Virtual DOM?

When something changes (or) gets updated, ReactJS creates a new Virtual DOM element. The virtual DOM element then compares itself to the old (original) DOM element to get the difference. Now, only the changed parts in the real/original DOM element is updated.

---------------------------------------------------------------------------
### Understanding files:
- The package.json file contains the metadata for our project.
- The package-lock.json file is automatically generated when `npm install` is run, and it locks down the versions of the dependencies installed in our project.
- index.html is the main file within which our app is loaded.
  - The entry point for vite, is the `<div>` tag in the index.html
- The application is initialized by the `<srcipt>` tag.
- eslint.config.js is a configuration file for defining rules and settings for ESLint - Linting tool to idenify and fix problems in code.
- The main UI of the app is written into the App.jsx file.
- The entry point for the react app is the Main.jsx file.
- index.css is the Main style file - To define global styles.
- The assets folder is to store website assets like images, icons etc which can be imported into the application.
- The App.css is the styling file specifically for the App.jsx file.

---------------------------------------------------------------------------
### Components in React:
1. Class Components:
    * Traditional component not used widely. Can be found in older code bases.
    * A class would extend `React.Component` to return a HTML element.
2. Components by declaring a JavaScript function.
    * Can also be defined using the new JavaScript syntax of an arrow function.

* Multiple components can be created in React and can be used within other components. Rendering one component inside another can be done either by:
  * Wrapping it inside a react fragment (`<>`), or
  * Inside a regular `<div>`.
* Importing react component looks just like another HTML tag. For ex., if there is a component called card, it is rendered using `<card>`

---------------------------------------------------------------------------

* Properties (props) in react are used to transfer/pass data between components.
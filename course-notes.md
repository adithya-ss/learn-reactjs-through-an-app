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

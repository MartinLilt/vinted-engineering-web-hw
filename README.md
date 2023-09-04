# Vinted Engineering web-hw | Martin Li.

## Task
Based on the provided screenshots, make a simple infinite-scroll capable web application that allows for the user to browse items and favourite them.

## How to setup the project

1. Run to start: `yarn` or `npm i`.
2. Run `yarn start` or `npm run start` to run the `dev` version of the application.
3. Open `http://127.0.0.1:3000` or `http://localhost:3000` in your browser to view the front-end project side.
4. I used `pixabay API` in this project. Documentation: https://pixabay.com/api/docs/

## Requirements

- You are to use Flickr API (recommended) or a similar API for data retrieval. If you choose another API, make sure it supports paginated results, unique images with some metadata and a way for us to access it.
- Design should be recreated as closely as possible, including item hover state.
- Responsive design (with at least three breakpoints — Desktop, Tablet, Phone).
- Infinite scroll - it's a concept where additional data is loaded when user scrolls down the screen.
- A possibility to favourite an item (favourites should not be lost on page reload).
- It is preferred to use `React`, but you can write vanilla JS code as well (no other libraries/frameworks, though).
- You are only allowed to use `react`, `react-dom` and your choice of any development-environment specific libraries (testing tools, babel, etc). All other 3rd-party libraries are forbidden (`Redux`, `lodash`, `jQuery`, `axios`, `bootstrap`, etc).
- For styling you can choose a solution that you think works best, such as regular CSS/SCSS, `CSS modules`, `Styled Components`, etc. 
- However, you are not allowed to use styling and UI frameworks such as `bootstrap`, `material-ui`, `tailwind` and similar. We want the code to be your own.

## Project Structure

- Front-end directory: The front-end application is located in the `my-app` directory.

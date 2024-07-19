# Todo App

A simple Todo App built with React that allows users to add, display, and delete todo items. This app demonstrates the use of React for state management, component design, and user interaction handling, along with data persistence using `localStorage`.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Preview](#preview)
- [Usage](#usage)
- [Components](#components)
  - [App Component](#app-component)
  - [Header Component](#header-component)
  - [Todos Component](#todos-component)
  - [TodoItem Component](#todoitem-component)
  - [AddTodo Component](#addtodo-component)
  - [About Component](#about-component)
- [Learnings](#learnings)
- [License](#license)

## Features
- Add new todo items with a title and description.
- Display a list of todo items.
- Delete todo items.
- Data persistence using `localStorage`.
- Navigation between home and about pages using React Router.

## Technologies Used
- React
- React Router
- Bootstrap

## Preview
![image](https://github.com/user-attachments/assets/7f175fbf-2555-44f4-9764-9504d20b1533)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Swati7819/To-Do-List-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### App Component
- Manages the state for the list of todos.
- Initializes todos from `localStorage` to persist data across sessions.
- Handles adding and deleting todos.
- Uses React Router to define routes for the home and about pages.
- Renders the `Header`, `AddTodo`, `Todos`, and `Footer` components on the home page.
- Renders the `About` component on the about page.

### Header Component
- Displays the title of the app and includes links to the home and about pages.
- Conditionally shows a search bar based on the `searchBar` prop.

### Todos Component
- Receives the list of todos and a delete function as props.
- Maps over the todos array to render individual `TodoItem` components.
- Displays a message if there are no todos.

### TodoItem Component
- Displays a single todo item, including its title and description.
- Provides a delete button that triggers the delete function passed from the `Todos` component.

### AddTodo Component
- Provides a form for adding new todos.
- Manages the input state for the title and description using the `useState` hook.
- Handles form submission, validates input, and calls the `addTodo` function.

### About Component
- Displays static content about the app.

## Learnings
- Improved understanding of React hooks (`useState`, `useEffect`).
- Gained experience with state management and data persistence.
- Learned to use React Router for navigation.
- Improved skills in component design and user interaction handling.
- Gained practical experience with Bootstrap for styling.

## Live Link
https://66961986296a3f36a294527c--bright-dolphin-ba9405.netlify.app/

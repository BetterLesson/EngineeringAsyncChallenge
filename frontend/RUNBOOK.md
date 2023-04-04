# BetterLesson Engineering Async Challenge

# Purpose

This project is a new web page for expanding coaching services to additional industries beyond K-12 education.

# Dependencies

- React
- React DOM
- Material UI (Legacy)

# Installation

1. Clone the repository.
2. Navigate `cd` into the `EngineeringAsyncChallenge/frontend` directory.
3. Run `npm install` to install dependencies

# Starting the project

1. Run `npm start` from the `frontend` directory to start the development server.
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Running Tests

There are currently no tests for this project.

# Possible Issues and Resolutions

- Issue: The development server does not start

  - Resolution: Check that all dependencies are installed and up to date by running `npm install`. Ensure that there are no conflicting ports being used by other open applications. Ensure that you are running `npm start` from the `frontend` directory.

- Issue: The coaches table failes to render.
  - Resolution: This may occur due to a conflict with React 18 and material UI 5. Run `npm install @material-ui/core --legacy-peer-deps` to install a compatible version.

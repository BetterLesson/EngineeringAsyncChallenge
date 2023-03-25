# Frontend Example

This project uses React to quickly stand up a simple frontend. This frontend incorporates a couple simple components to display a table of information and present a sign up form.

### Prerequisites

To run this program, you will need:
* Node and npm

### Using the Program

From the main frontend directory, run:
* `npm install` to install all required modules for the project
* `npm start` to run the client

The frontend project can then be viewed from http://localhost:3000

The data grid that holds table entries provides simple sorting options, so users could easily see all coaches available for a certain industry, for example.

The contact form prints to the console on success and raises an alert otherwise for testing purposes.

### Future work

As my background is more geared towards backend and database, I focused on those challenges first. There are a number of areas where the frontend design could be improved, therefore. Options for improvement could include:
* Better design. The page admittedly does not look like a sleek, modern web page and more attention to images and styling could make a significant difference.
* Validation. The form currently only checks whether fields are empty or not. An email regex would make validation more accurate and making use of error text and styling would offer a better user experience than a popup alert on failing validation.
* Table choice. DataGrids are really better for larger data sets. A preview of upcoming coaches likely would not need the sorting capabilities provided here and so the extra navigation options are just distracting rather than helpful.
* Code structure. Ideally, strings would be saved in their own file for easy editing and translation, CSS and component files might be further split up for reusability, etc.

This project could definitely do with another iteration or two, but it offers a starting point.

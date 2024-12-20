# Angular-FinalProject
This is my final project with Angular.
## Project Description:
The Courses Management System is a comprehensive web-based application designed to streamline the process of managing and interacting with educational courses. It provides a user-friendly platform for creating, viewing, updating, deleting, and searching courses. The platform allows users to easily learn more about something they are interested in. Home, about and all courses pages can be visited by everyone. Logged-in users can access search,profile and add-course pages. Those, who are not logged-in can only access login and register. Every course has details that can only be viewed if the user is logged in and an opportunity to edit and delete, only if the person who is logged in, is the author of it. There is also a profile page that shows the user's details and the courses they have created. There is a search box where users can search for a course they want to learn about. The project is still in progress. The system is built with modern web technologies, ensuring scalability, efficiency, and a seamless user experience.

## Installation and Setup:
Follow these instructions to get the project up and running on your local machine.

## Ensure you have the following installed:
```bash
Node.js
npm (Node Package Manager)
Angular CLI (install globally using npm install -g @angular/cli)
```
## Cloning the Repository:
```bash
git clone https://github.com/DayanaUzunova/Angular-FinalProject
```
## To see my database:
Ensure MongoDB is running locally. Use the mongorestore command to restore the database from the provided forum folder:
```bash
mongorestore --db forum ./forum
```

## Open two terminals:
First Terminal (Node.js server): 
```bash
cd server
npm install 
```

Second Terminal (Angular Frontend): 
``` bash
cd client
npm install
```
npm install - Install Dependencies (node_modules)

## To start the server(in the first terminal):
```bash
cd server
npm start
```
## To run the client (in the second terminal):
```bash
cd client
ng serve 
```
This starts the Angular frontend, which will be available at http://localhost:4200.
follow the terminal link to open the project :)



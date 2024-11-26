# Task Rabbit

## Overview
This project is a Task Rabbit project that allows users to register, authenticate, and manage their profiles. The application is built using React for the frontend and Express with MongoDB for the backend. 

## Features
- **User Registration**: Users can sign up by providing their details.
- **User Authentication**: Users can log in to access their profiles.
- **User Profiles**: Users can view their profile information.

## Technologies Used
- **Frontend**: React
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs

## API Endpoints

### User Registration
- **Endpoint**: `/signup`
- **Method**: POST
- **Description**: Validates user input, hashes passwords, and stores user details in MongoDB.

### User Authentication
- **Endpoint**: `/login`
- **Method**: POST
- **Description**: Validates user credentials and generates JWT tokens for authenticated sessions.

### User Profiles
- **Endpoint**: `/user`
- **Method**: GET
- **Description**: Retrieves user details from MongoDB using JWT tokens.

### Task Management
- **Frontend**: Implement forms and views to create, update, and display tasks.
- **Backend**: Create endpoints to handle CRUD operations for tasks in the database.


## Pending Tasks

### Image Upload
- **Frontend**: Implement an image upload form using React and integrate it with a file input.
- **Backend**: Create an endpoint to handle image uploads, store images using a service like AWS S3 or Cloudinary, and save image URLs in the database.
Here is the translation of your text into English:

# Login App

This is a simple login application that uses **Spring Boot** for the backend, **Java** as the main language, and **Angular** for the frontend interface.

## Technologies Used

- **Java 17**: Programming language used for backend development.
- **Spring Boot**: Framework used for building the backend RESTful API.
- **Angular**: JavaScript framework used for frontend user interface development.
- **MySQL**: Database used to store user information.

## Features

- Account creation (user registration).
- Login with secure authentication.
- Password recovery (optional).
- Route protection in the frontend.
- Backend with authentication via **JWT** (JSON Web Tokens).

## Project Structure

### Backend (Spring Boot)

The backend was developed with Spring Boot and includes:

- **Controllers**: To manage HTTP requests.
- **Services**: Business logic for user authentication and management.
- **Repositories**: Interaction with the MySQL database to store and retrieve data.

### Frontend (Angular)

The frontend was developed with Angular and includes:

- **UI Components**: Login and registration forms.
- **Authentication Services**: Interaction with the backend API for user login and registration.
- **Route Protection**: Only authenticated users can access certain pages.

## Prerequisites

- **Java 17** or higher
- **Node.js** and **npm** for Angular
- **MySQL** for the database
- **Git** for version control

## How to Run the Project

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/newtsarthur/App-de-Login.git
   ```

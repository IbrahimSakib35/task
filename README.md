# Gym Class Scheduling and Membership Management System
## Project Overview
The Gym Class Scheduling and Membership Management System is a web-based platform designed to manage gym operations efficiently. It supports three roles: Admin, Trainer, and Trainee, each with specific permissions. Admins can manage trainers, schedule classes, and assign trainers. Trainers can view their schedules, and trainees can book classes. The system enforces business rules to ensure smooth operations and utilizes JWT-based authentication for secure access.
 
## Relational Diagram
[Relation Diagram:] (https://drive.google.com/file/d/1CWGdTLZHEtcDYJHgEUd9GS0EctyBVM27/view?usp=sharing)
## Technology Stack
- **Frontend**:
  - Next.js
  - React.js
  - Redux Toolkit
  - Tailwind CSS
- **Backend**:
  - Express.js
  - JavaScript
  - Mongoose (ODM)
  - MongoDB
- **Authentication**:
  - JWT (JSON Web Tokens)
## API Endpoints
### Authentication
- **POST /api/auth/login**
  - **Description**: Authenticate a user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "jwt-token"
    }
    ```

- **GET /api/auth/me**
  - **Description**: Bearer <JWT token>.
  - **Request Body**:
    ```json
    {
      "id": "user-id",
      "fullName": "John Doe",
      "email": "john@example.com",
      "role": "trainee",
      "createdAt": "2023-12-02T10:00:00Z"
    }
    ```
  - **Error Response**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **POST /api/auth/register**
  - **Description**: Register a new trainee.
  - **Request Body**:
    ```json
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### Class Management
- **GET /api/classes**
  - **Description**: Get all classes.
  - **Response**:
    ```json
    [
      {
        "id": "class-id",
        "name": "Yoga",
        "trainer": "trainer-id",
        "date": "2024-12-02",
        "startTime": "10:00",
        "endTime": "12:00",
        "trainees": ["trainee-id1", "trainee-id2"]
      }
    ]
    ```

### User Management
- **GET /api/users**
  - **Description**: Get all users.
  - **Response**:
    ```json
    [
      {
        "id": "user-id",
        "fullName": "John Doe",
        "email": "john@example.com",
        "role": "trainee",
        "createdAt": "2023-12-02T10:00:00Z"
      }
    ]
    ```
## Database Schema
### User Model
```json
{
  "id": "ObjectId",
  "fullName": "String",
  "email": "String",
  "password": "String",
  "role": "String", // enum: ['admin', 'trainer', 'trainee']
  "createdAt": "Date"
}
```
### Class Model
```json
{
  "id": "ObjectId",
  "name": "String",
  "trainer": "ObjectId", // references User
  "date": "Date",
  "startTime": "String",
  "endTime": "String",
  "trainees": ["ObjectId"] // references User
}
```

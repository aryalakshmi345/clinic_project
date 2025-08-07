# Clinic Management System

A full-stack clinic management system built with **Node.js (Express framework)** and **React**. This application allows users to log in, view doctors, book appointments, and view their own appointments. Backend APIs are secured using Bearer token-based authentication.

---

## Features

### Backend (Node.js + Express)
- **Login API**: Returns an authentication token
- **User Profile API**: Returns logged-in user details
- **Doctor List API**: Returns list of doctors with their speciality and department
- **Appointment Create API**: Allows authenticated users to book an appointment
  - Validates that the appointment date is not in the past
- **Appointment List API**: Returns appointments for the authenticated user
- Protected routes using JWT Bearer token
- CORS enabled for frontend communication

### Frontend (React)
- Login page to authenticate and store token
- Doctors list page with specialities and "Book Appointment" button
- Appointment form with validation and error handling
- Appointment list for logged-in user

---

## Folder Structure

frontend/ # React frontend
backend/ # Node.js Express backend
README.md



##  Getting Started

### 1. Clone the Repository


git clone https://github.com/aryalakshmi345/clinic_project

cd clinic_project 

2. Backend Setup (Express)

cd backend

npm install

Create a .env file:

MONGO_URI=mongo_db_uri

JWT_SECRET=your_jwt_secret_key

Start the server:

node index.js

3. Frontend Setup (React)

cd  frontend

npm install

npm run dev




Dummy users and doctors are already seeded into the MongoDB database. No need to manually create them via API or Admin.

1. Email : john@example.com

Password:  password

2. Email : jane@example.com

Password:  secure123

## Conclusion

This application demonstrates a simple clinic management system with secure authentication, appointment booking, and doctor listings. 

Thank you for taking the time to review this project.


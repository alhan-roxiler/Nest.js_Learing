# 🚗 Used Car Pricing API

The **Used Car Pricing API** is a backend application built using **NestJS**, **TypeORM**, and **TypeScript**.  
It provides a feature-complete system for managing used car data — from user authentication to value estimation, sales reporting, and admin approvals — with secure data handling and effective error management.

This project demonstrates practical backend development skills while following clean architecture, modular design, and production-level practices.

---

## 🧩 Project Overview

This project allows you to apply key backend development concepts such as:

- **Dependency Injection**
- **Data Validation and Transformation**
- **TypeORM Relationships**
- **Error Handling and Exception Filters**
- **Reusable, Maintainable, and Testable Code Structure**

You’ll enhance your understanding of how to build, structure, and scale APIs that are robust and easy to extend.

---

## ⚙️ Core Features

### 👤 User Authentication
- Users can **sign up** and **log in** securely using email and password.
- Implements JWT authentication using `Passport.js`.
- Passwords are encrypted before storage.

### 🚘 Car Value Estimation
- Users can get an **estimated value** for their vehicle based on:
  - Make  
  - Model  
  - Year  
  - Mileage  
  - Geographic location
- Logic calculates estimated value dynamically and returns the result via GET requests.

### 💰 Sales Reporting
- After selling a vehicle, users can **report the final sale price**.
- Reported data is stored in the database and contributes to future price estimation improvements.

### 🧾 Admin Functionality
- Admins review and approve reported sales to ensure data reliability.
- Prevents misuse or submission of false pricing data.

### 🔍 Query and Request Handling
- Handles query strings safely and validates input parameters (like latitude and longitude).
- Uses pipes and DTOs to transform and validate incoming data.

### ⚠️ Error Management
- Robust error handling for invalid input, authentication failures, and server-side issues.
- Ensures clean error responses and improves developer experience.

---

## 🧱 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | [NestJS](https://nestjs.com/) |
| **Language** | TypeScript |
| **ORM** | TypeORM |
| **Database** | PostgreSQL / MySQL |
| **Validation** | class-validator, class-transformer |
| **Authentication** | JWT (Passport.js) |
| **Environment** | Node.js |

---

## 🗂️ Application Flow

Used Car Pricing API
│
├── Users sign up with email/password
├── Users get an estimate for how much their car is worth
│ based on make/model/year/mileage
├── Users can report what they sold their vehicles for
└── Admins approve reported sales



## 🧠 Learning Outcomes

By building this project, you will:

- Understand **NestJS architecture and modules**
- Implement **secure authentication** and authorization
- Perform **CRUD operations** with TypeORM
- Apply **DTOs, Pipes, and Validation**
- Manage **Admin privileges** and restricted routes
- Implement **Exception filters and robust error handling**
- Build a **scalable and production-ready backend**

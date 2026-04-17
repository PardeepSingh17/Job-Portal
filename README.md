# 🚀 Job Portal Backend (Production Ready)

A fully functional and production-ready Job Portal backend built using **Node.js, Express, and MongoDB**.
This project includes authentication, role-based access control, job management, and a complete job application system with file uploads.

---

##  Features

###  Authentication & Authorization

* JWT-based Authentication (Login/Register)
* Password hashing using bcrypt
* Role-based Access Control (Candidate / Recruiter)
* Protected routes using middleware

---

###  Job Management

* Create, view, and delete job listings
* Ownership-based authorization (only creator can delete job)
* Advanced filtering:

  * Location
  * Title
  * Company
  * Salary range
* Sorting (e.g., by salary)
* Pagination for large datasets

---

###  Job Application System

* Apply to jobs (authenticated users)
* Prevent duplicate applications
* Resume upload using Multer
* Store resume file paths in database
* Fetch all applied jobs for a user

---

###  Security & Validation

* Rate limiting using express-rate-limit
* Input validation using Joi
* Secure API responses with consistent structure
* Error handling middleware (production-ready)

---

###  Architecture

* MVC pattern (Controllers, Routes, Models, Middleware)
* Clean and scalable folder structure

---

##  Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (jsonwebtoken)
* **Validation:** Joi
* **File Uploads:** Multer
* **Security:** bcrypt, express-rate-limit
* **Logging:** Morgan

---

##  API Endpoints

###  Auth Routes

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

---

###  Job Routes

* `POST /api/jobs` → Create job (Recruiter only)
* `GET /api/jobs` → Get all jobs (filters, sorting, pagination)
* `GET /api/jobs/:id` → Get job by ID
* `DELETE /api/jobs/:id` → Delete job (Owner only)

---

###  Application Routes

* `POST /api/jobs/:id/apply` → Apply to job (with resume upload)
* `GET /api/jobs/applied` → Get all jobs applied by user

---

## 🔍 Query Parameters

Examples:

* `/api/jobs?location=Delhi`
* `/api/jobs?title=Developer`
* `/api/jobs?company=Google`
* `/api/jobs?salary=50000`
* `/api/jobs?page=1&limit=5`
* `/api/jobs?sort=salary`

---

##  Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/PardeepSingh17/Job-Portal
cd job-portal-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run server

```bash
npm run dev
```

---

##  Deployment

This backend can be deployed on platforms like:

* Render
* Railway
* AWS

Make sure to set environment variables in the deployment dashboard.

---

##  Project Highlights

* Built a scalable REST API with **authentication & role-based access**
* Implemented **job application system with resume uploads**
* Designed **secure backend with validation and rate limiting**
* Optimized APIs using **pagination, filtering, and sorting**
* Followed **clean architecture (MVC pattern)**

---

##  Future Improvements

* Save/Bookmark jobs
* Email notifications
* Admin dashboard
* Frontend integration (React)

---

## Live demo link

https://job-portal-3izy.onrender.com

##  Author

**Pardeep Singh**

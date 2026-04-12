#  Job Portal Backend (MERN)

A production-ready Job Portal backend built using **Node.js, Express, and MongoDB**.
This project implements secure authentication, role-based access control, and scalable REST APIs for managing job listings.

---

##  Features

*  JWT-based Authentication (Login/Register)
*  Password hashing using bcrypt
*  Role-based Access Control (Candidate / Recruiter)
*  Protected Routes using Middleware
*  Job CRUD APIs (Create, Read, Delete)
*  Ownership-based Authorization (only creator can delete job)
*  Advanced Search & Filtering (location, title)
*  Pagination support for large datasets
*  MVC Architecture (clean and scalable structure)

---

##  Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (jsonwebtoken)
* **Security:** bcrypt
* **Environment Management:** dotenv

---

##  API Endpoints

###  Auth Routes

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

---

###  Job Routes

* `POST /api/jobs` → Create job (Recruiter only)
* `GET /api/jobs` → Get all jobs (with filters & pagination)
* `GET /api/jobs/:id` → Get job by ID
* `DELETE /api/jobs/:id` → Delete job (Owner recruiter only)

---

##  Query Parameters (Filters & Pagination)

Examples:

* `/api/jobs?location=Delhi`
* `/api/jobs?title=Developer`
* `/api/jobs?location=Delhi&title=Frontend`
* `/api/jobs?page=1&limit=5`

---

##  Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/PardeepSingh17/Job-Portal
cd job-portal-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Run the server:

```bash
npm run dev
```

---

##  Project Highlights

* Designed secure backend using **JWT + role-based authorization**
* Implemented **ownership validation** for sensitive operations
* Built scalable APIs with **filtering and pagination**
* Followed **MVC architecture** for maintainability

---

##  Future Improvements

* Apply to jobs (application system)
* Save/Bookmark jobs
* Frontend (React) integration
* Deployment (Render / Railway)

---

## 👨 Author

Built by PARDEEP SINGH

---

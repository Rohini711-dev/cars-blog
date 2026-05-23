# Car Blogs API - Backend CRUD Application

RESTful API for managing car blog posts built with Node.js and Express.js.

## Live Demo
[View API](https://cars-blog-gitlab.vercel.app/posts)

##  Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / Mongoose
- **Architecture**: REST APIs, CRUD Operations, MVC Pattern
- **Tools**: Postman, Git, VS Code

##  API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/posts` | Get all blog posts |
| POST | `/posts` | Create new blog post |
| GET | `/posts/:id` | Get single post by ID |
| PUT | `/posts/:id` | Update post by ID |
| DELETE | `/posts/:id` | Delete post by ID |

##  Features
- Create, Read, Update, Delete blog posts via REST endpoints
- Express.js routing and middleware for request handling
- Data persistence with MongoDB
- Input validation and error handling
- Tested all endpoints using Postman

##  What I Learned
- Building scalable RESTful APIs with Express.js
- Implementing CRUD operations and server-side logic
- Database integration and connecting Node.js to MongoDB
- API testing and debugging with Postman

## Run Locally
```bash
npm install
npm start

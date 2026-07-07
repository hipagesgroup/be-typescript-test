[![Link to be-typescript-test in hipages Developer Portal, Component: be-typescript-test](https://backyard.prod.hipages.com.au/api/badges/entity/default/component/be-typescript-test/badge/pingback "Link to be-typescript-test in hipages Developer Portal")](https://backyard.prod.hipages.com.au/catalog/default/component/be-typescript-test)
[![Entity owner badge, owner: architecture-council](https://backyard.prod.hipages.com.au/api/badges/entity/default/component/be-typescript-test/badge/owner "Entity owner badge")](https://backyard.prod.hipages.com.au/catalog/default/component/be-typescript-test)

# Problem

## Requirement
Create an API to manage jobs & appointments.

A job can have a contact, a description and appointments.
Appointments have a title and start & end dates.

The API should be able to create and retrieve jobs and appointments.

## Initial Setup
To help start you off, the project has a controller setup with basic POST and GET endpoints.

For this exercise you can use the file system for persistence and this has been setup for you.

Swagger is also already setup, so once running you can test from the browser if you like by accessing http://localhost:3000/swagger

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Application

#### Development mode (with hot-reload)
```bash
npm run start:dev
```

#### Production mode
```bash
npm run build
npm run start:prod
```

### Testing the API
Once the application is running, you can:
- Access the Swagger UI at: http://localhost:3000/swagger
- Use the example endpoints:
  - POST http://localhost:3000 - Saves a DbExample
  - GET http://localhost:3000 - Retrieves all DbExamples

### Project Structure
```
src/
├── controllers/       # API controllers
│   └── app.controller.ts
├── services/         # Business logic and data access
│   └── file-system-db.service.ts
├── models/           # Data models/DTOs
│   └── db-example.model.ts
├── app.module.ts     # Root module
└── main.ts           # Application entry point
```

### Docker Support
You can also run the application using Docker:
```bash
docker build -t interview-practical .
docker run -p 3000:3000 interview-practical
```

## Your Task
Extend this application to implement the full requirements for managing jobs and appointments as described above.

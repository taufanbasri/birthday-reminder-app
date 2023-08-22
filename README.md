
---

# Birthday Reminder Application Documentation

The Birthday Reminder Application is a simple application that sends personalized birthday reminders to users at 9 am in their local time zone.

## Table of Contents

- [Birthday Reminder Application Documentation](#birthday-reminder-application-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Running the Reminder](#running-the-reminder)
  - [API Endpoints](#api-endpoints)
    - [POST /user](#post-user)
    - [PUT /user/:id](#put-userid)
    - [DELETE /user/:id](#delete-userid)
  - [Testing](#testing)
  - [Contributor](#contributor)

## Introduction

Welcome to the Birthday Reminder Application! This application makes it easy to ensure your loved ones receive birthday wishes right on time, no matter where they are in the world.

## Prerequisites

To use the Birthday Reminder Application, you'll need the following:

- Node.js and npm (Node Package Manager) installed on your machine
- MongoDB installed and running

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/birthday-reminder-app.git
   cd birthday-reminder-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following:

   ```
   MONGODB_URI=your-mongodb-uri
   PORT=3000
   ```

## Usage

**Start the Application:**

   ```bash
   npm run dev
   ```

   This will launch the Birthday Reminder Application.

## Running the Reminder

The reminder script ensures that birthday messages are sent at the right time. To run the reminder:

1. **Open a New Terminal Window:**

2. **Navigate to the Project Directory:**

3. **Run the Reminder Script:**

   ```bash
   node reminder.js
   ```

   The reminder will trigger at 9 am in each user's local time zone.

## API Endpoints

### POST /user

Add a new user to the system.

**Example Payload:**

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "birthday": "1990-08-22",
  "location": "America/New_York"
}
```

### PUT /user/:id

Update user details by ID.

**Example Payload:**

```json
{
  "first_name": "UpdatedFirstName",
  "last_name": "UpdatedLastName",
  "birthday": "1990-08-22",
  "location": "Asia/Jakarta"
}
```

### DELETE /user/:id

Remove a user by ID.

**Example Request:**

```http
DELETE /user/614cd0efc476e5a88d5c0d6a
```

## Testing

To test the application:

1. **Start the Application:**

   ```bash
   npm run dev
   ```

2. **Send Requests:**

   Use tools like `curl`, Postman, or a web browser to send requests to the defined endpoints.

---

## Contributor

[@taufanbasri](https://github.com/taufanbasri) with ❤️.

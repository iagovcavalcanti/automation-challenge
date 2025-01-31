This repository contains an automation challenge using Cypress for end-to-end (E2E) and API testing. The challenge involves testing the Serverest application.

📌 Project Structure

automation-challenge/
├── cypress/
│   ├── tests/
│   │   ├── api/        # API test cases
│   │   ├── e2e/        # Frontend test cases
│   ├── support/        # Custom commands and utilities
├── cypress.config.js   # Cypress configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation

🚀 Getting Started

Prerequisites

Node.js installed

Cypress installed

GitHub account for hosting

Installation

Clone the repository:

git clone https://github.com/iagovcavalcanti/automation-challenge.git

Navigate to the project directory:

cd automation-challenge

Install dependencies:

npm install

🧪 Running Tests

Running Frontend Tests

npx cypress run --spec "cypress/tests/e2e/*.cy.js"

Running API Tests

npx cypress run --spec "cypress/tests/api/*.cy.js"

Running Tests in Cypress UI

npx cypress open

📊 Test Reports

Mochawesome is configured for test reporting. After running the tests, reports can be found in the cypress/reports folder.

✅ Test Scenarios

Frontend Tests

Visit the homepage

Register a new user

Log in with registered user

API Tests

Create a new user via API

Authenticate user via API

Retrieve user details via API

📌 Notes

Ensure the Serverest API is available before running the tests.

The challenge is structured for clarity, using design patterns for better maintainability.


# Cypress Demoblaze Automation Project

Automated end‑to‑end and API testing project built with **Cypress v12**.  
Focused on creating clean, stable and maintainable test suites for the Demoblaze demo e‑shop.

This project demonstrates real‑world QA automation practices, including UI testing, API validation, CI integration, and handling flaky tests.

---

## Features

- UI automation of core e‑shop flows (login, product selection, cart)
- API testing integrated into UI scenarios
- Custom commands for cleaner test structure
- Stable selectors and retry‑friendly logic
- Handling flaky elements and UI delays
- CI‑ready configuration (GitHub Actions)
- Clear project structure following Cypress best practices

---

##  Test Coverage

###  UI Tests
- Login flow  
- Product detail validation  
- Add to cart  
- Cart verification  
- Logout  

###  API Tests
- Product list  
- Cart operations  
- Response validation  

###  Stability Improvements
- Removed unstable E2E checkout flow for CI reliability  
- Improved selectors  
- Added retries and wait‑free logic where possible  

---

##  Project Structure

cypress-demoblaze-automation/
│
├── cypress/
│   ├── e2e/          # Test specs
│   ├── fixtures/     # Test data
│   ├── support/      # Commands & config
│   └── downloads/    # Downloaded files (if used)
│
├── .github/workflows # CI pipeline
├── cypress.config.js
├── package.json
└── README.md


---

## Tech Stack

- **Cypress v12**
- **JavaScript**
- **Node.js**
- **GitHub Actions (CI)**
- **Mocha / Chai**

---

##  How to Run Tests

### 1.Install dependencies
npm install
### 2. Run tests in headed mode
npx cypress open
### 3. Run tests in headless mode
npx cypress run

---

## 🔄 Continuous Integration (CI)

This project includes a GitHub Actions workflow that:

- installs dependencies  
- runs Cypress tests in headless mode  
- uploads test artifacts on failure  

CI is optimized for stability and uses Node 20.

---

## 📌 Notes

- Unstable checkout flow was removed to ensure consistent CI results  
- Project is continuously improved based on real‑world debugging and QA practices  

---

## 👤 Author

**Patrik Susa**  
QA Automation Trainee | Cypress | Test Automation





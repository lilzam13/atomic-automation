# Bizee – Automation Test Repository

This project contains the end-to-end automated test suite for **Bizee** website. The test suite covers the Main Order flow, Miscellaneous Orders, authentication (login), and key processes within the customer dashboard.
It is built using Playwright and structured with the Page Object Model (POM) to ensure scalability, maintainability, and reliable test execution.

## 🚀 Getting started

### ✅ Prerequisites
Before running the project, ensure you have:
- **Node.js** (version v24.10.0 or later): https://nodejs.org
- **npm**
- macOS, Linux, or Windows environment
- Access to Bizee staging environment:
    - **URL:** https://atomic.master.incfile.test.incfile.me/branches/lilzam13

**Optional:**
- VS Code with Playwright Test extension

## 📦 Installation:
Clone the repository and install dependencies:

Open the terminal: Warp
```git clone git@github.com:lilzam13/atomic-automation.git```
```cd atomic-automation```
```npm install```
Create a .env.development file

## 🤝 Access & Credentials
Credentials and environment variables are not committed for security reasons.
Please contact the QA team to request:
 - .env.development file
 - Staging credentials

## ▶ Running Tests
| Browser           | Command                |
| ----------------- | ---------------------- |
| Chrome (Chromium) | `npm run test_chrome`  |
| Edge              | `npm run test_edge`    |
| Firefox           | `npm run test_firefox` |
| Safari (WebKit)   | `npm run test_safari`  |
| Run all browsers  | `npm run test_all_browsers`|

### ▶ Open the test results reporter
```npm run open_test_report```

## 📁 Project Structure
atomic-automation/
│
├── tests/               # Test specifications
├── pages/               # Page Object classes
├── data/                # Test data (paths, constants, etc.)
├── utils/               # Helpers and utility functions
├── playwright.config.ts # Playwright configuration
└── .env                 # Environment variables (not included in repo)

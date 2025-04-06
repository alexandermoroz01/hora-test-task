# Clone repo
    git clone https://github.com/alexandermoroz01/hora-test-task.git

# Install
    npm install

# Run tests
    npm run wdio

# Allure Report
[LINK](https://alexandermoroz01.github.io/hora-allure/allure/)

# Structure

    hora-test-task/
    ├── .github/workflows/         # CI/CD pipeline using GitHub Actions
    │   └── test.yml               # Workflow for running tests and generating reports
    ├── allure-report/             # Allure-generated HTML report (after build)
    ├── allure-results/            # Raw test execution results for Allure
    ├── node_modules/              # Project dependencies
    ├── test/
    │   ├── helpers/               # Utility functions used across the test suite
    │   │   └── helper.js
    │   ├── pageobjects/           # Page Object Model (POM) files for UI abstraction
    │   │   ├── cart.page.js
    │   │   ├── main.page.js
    │   │   ├── navigation.bar.js
    │   │   ├── page.js            # Base page class
    │   │   └── product.page.js
    │   └── specs/                 # Test cases organized by functionality
    │       └── ecommerce.test.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── wdio.conf.js               # WebdriverIO configuration file

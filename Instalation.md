# Installation
Obs.: For this project I used Visual Studio and Postman, so the following instructions will be considering its environment

#### UI Tests
- Make sure you have node installed.
- Download or pull the repository project.
- Open the projetc folder in Visual Studio Code.
- Open a terminal via Terminal - New Terminal (there are many types of terminals, I used cmd).
- Navigate to UI tests (cd "UI tests").
- Run this command to install Cypress: npm install cypress --save-dev
- Now open Cypress with command: npx cypress open.
- Select E2E Testing and wait for it to create additional files.
- The tests are now available to run.

#### API Tests
- Download Postman, create and account or log in.
- In the project repository, go to API tests\collection.
- Select the json file and download it.
- Open Postman, choose a environment (or create a new one).
- Select import > file > select the json file.
- The collection should be imported and it's ready to make requests.
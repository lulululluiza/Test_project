#### API Tests
- I tried to cover the happy path as much as possible with automated tests, with the idea of ​​ensuring that the essentials (basic CRUD) are working.
- For other cases (mainly validations), I created test cases but didn't have enough time to automate them.
- Occasionally, it was necessary to create a new token and a new booking, which broke the test flow. Given the time available, I ended up not being able to handle this in a better way, making it necessary to run the requests needed to recreate the variables.

#### UI Tests
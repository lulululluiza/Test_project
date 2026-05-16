#### API Tests
- I tried to cover the happy path as much as possible with automated tests, with the idea of ​​ensuring that the essentials (basic CRUD) are working.
- For other cases (mainly validations), I created test cases but didn't have enough time to automate them.
- Occasionally, it was necessary to create a new token and a new booking (not sure if the API is coded to delete entries from time to time, which would explain why the token keep expiring), which broke the test flow. Given the time available, I ended up not being able to handle this in a better way, making it necessary to run the requests needed to recreate the variables.
- The documentation doesn't mentioned what is expected if there's any problem with the request, if it returns a message or a status code. I included tests validating the status codes as they showed up in the request, but that information should be in the documentation too.

#### UI Tests
- Give the time available, I coudn't add as much automation as I wanted, specially regarding general validations, like field validations. So, I created as much automation as possible in more essential areas, like the checkout process.
- I tried to be as broad as possible with the test cases since I didn't have the site's documentation or something similar.
# Test Cases
#### Authentification
##### User Login
**Test Case:** Login with the correct credentials (standard_user)<br>
**Description:** Verify if after inserting valid credentials, the user can log in<br>
**Prerequisites:** User has an valid account and is in the login page<br>
**Test Steps:** Insert Username "standard_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** User log in<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login with a locked out user<br>
**Description:** Verify if after inserting credentials of a locked out user, the user don't log in<br>
**Prerequisites:** User has an locked out account and is in the login page<br>
**Test Steps:** Insert Username "locked_out_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** User don't log in and a warning is displayed<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login with a problem user<br>
**Description:** Verify if after inserting credentials of a problem user, the user log in and all product images are the same<br>
**Prerequisites:** User has an problem account and is in the login page<br>
**Test Steps:** Insert Username "problem_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** User log in and all product images are the same<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login with a performance glitch user<br>
**Description:** Verify if after inserting credentials of a performance glitch user, the user log in after a delay<br>
**Prerequisites:** User has an performance glitch account and is in the login page<br>
**Test Steps:** Insert Username "performance_glitch_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** User log in after a delay<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login with a error_user glitch user<br>
**Obs.:** Not automatized<br>
**Description:** Verify if after inserting credentials of a error user, the user log in and a couple of the site's functionalities don't work:
- Can only insert a single product in cart and can remove it from the cart page.
- Sorting triggers an alert.
- During checkout, it's not possible to insert a Last Name
- Also during checkout, "Finish" button don't work. 
**Prerequisites:** User has an error account and is in the login page<br>
**Test Steps:** Insert Username "error_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** A couple funcionalities of the system described above are not working<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login with a visual user<br>
**Description:** Verify if after inserting credentials of a visual glitch user, the user log in and many layout details are off (product image, cart position, title position...) <br>
**Prerequisites:** User has an visual glitch account and is in the login page<br>
**Test Steps:** Insert Username "visual_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** User log in and many layout details are off (product image, cart position, title position...)<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login a wrong username<br>
**Description:** Verify if after inserting a wrong username, the user don't login and a warning is displayed<br>
**Prerequisites:** User is in the login page<br>
**Test Steps:** Insert Username "standard_super_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** The user don't login and a warning is displayed<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login a wrong password<br>
**Description:** Verify if after inserting a wrong password, the user don't login and a warning is displayed<br>
**Prerequisites:** User is in the login page<br>
**Test Steps:** Insert Username "standard_user" and Password "super_secret_sauce" > click "Login"<br>
**Expected Results:** The user don't login and a warning is displayed<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Login without inserting credentials<br>
**Description:** Verify if after clicking Login without inserting credentials the user don't login and a warning is displayed<br>
**Prerequisites:** User is in the login page<br>
**Test Steps:** Click "Login"<br>
**Expected Results:** The user don't login and a warning is displayed<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Retrying valid login (standard_user) after closing an alert<br>
**Description:** Verify if after writing one of the credentials wrong, trying to login, failing and retrying with the correct credentials, the user login sucessfully<br>
**Prerequisites:** User has an account and is in the login page<br>
**Test Steps:** Insert Username "standard_user" and Password "secrets_sauce" > click "Login" > close the warning > Insert Username "standard_user" and Password "secret_sauce" > click "Login"<br>
**Expected Results:** The user don't login, a warning is generated and after retrying with the correct credentials, the user manages to log in<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

##### Products Management
**Test Case:** Products are sorted from A to Z<br>
**Description:** Verify if after selecting "Name (A to Z)", the products are sorted from A to Z<br>
**Prerequisites:** User has an account and it's logged<br>
**Test Steps:** Select the sort option "Name (A to Z)"<br>
**Expected Results:** The products are sorted by title from A to Z<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Products are sorted from Z to A<br>
**Description:** Verify if after selecting "Name (Z to A)", the products are sorted from Z to A<br>
**Prerequisites:** User has an account and it's logged<br>
**Test Steps:** Select the sort option "Name (Z to A)"<br>
**Expected Results:** The products are sorted by title from Z to A<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Products are sorted from price low to high<br>
**Description:** Verify if after selecting "Price (low to high)", the products are sorted from cheapest to most expensive<br>
**Prerequisites:** User has an account and it's logged<br>
**Test Steps:** Select the sort option "Price (low to high)"<br>
**Expected Results:** The products are sorted from cheapest to most expensive<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Products are sorted from price high to low<br>
**Description:** Verify if after selecting "Price (high to low)", the products are sorted from most expensive to cheapest<br>
**Prerequisites:** User has an account and it's logged<br>
**Test Steps:** Select the sort option "Price (high to low)"<br>
**Expected Results:** The products are sorted from most expensive to cheapest<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

##### Checkout process
**Test Case:** Simple checkout scenario<br>
**Description:** Verify if after filling the checkout form and confirming the informations, the checkout is completed sucessfully<br>
**Prerequisites:** User has an account, has itens in cart and has clicked Checkout<br>
**Test Steps:** Fill fields "First Name": Someone, "Last Name": Someoneson and "Zip/Postal Code": 1122333 > Click "Continue" > Click "Finish"<br>
**Expected Results:** The user is redirected to a page congratulating then for the order<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Itens in cart match the checkout itens<br>
**Description:** Verify if the itens listed in the checkou summary match the ones in cart<br>
**Prerequisites:** User has an account, has itens in cart and has clicked Checkout > filled the information > clicked Continue <br>
**Test Steps:** Compare the itens in "Checkout: Overview" with the ones in cart<br>
**Expected Results:** The itens in "Checkout: Overview" match the ones in cart<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Subtotal and total values are correct<br>
**Description:** Verify if subtotal and total values in "Checkout: Overview" are correct<br>
**Prerequisites:** User has an account, has itens in cart and has clicked Checkout > filled the information > clicked Continue <br>
**Test Steps:** Sum all itens prices (considering also their quantity) and add tax<br>
**Expected Results:** Subtotal and total values are correct<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

##### Cart management
**Test Case:** Removing the only product in cart<br>
**Description:** Verify if after removing the only product in cart, the cart is empty<br>
**Prerequisites:** User has an account, it's logged and have a single item in cart<br>
**Test Steps:** Select the cart > click "Remove"<br>
**Expected Results:** The cart item list is empty<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Removing all products in the cart<br>
**Description:** Verify if after removing all products in cart, the cart is empty<br>
**Prerequisites:** User has an account, it's logged and have more than one item in cart<br>
**Test Steps:** Select the cart > click "Remove" in all products<br>
**Expected Results:** The cart item list is empty<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

##### Site navigation
**Test Case:** Navigate to main page <br>
**Description:** Verify if is possible to navigate to the main page<br>
**Prerequisites:** User has an valid account and it's logged<br>
**Test Steps:** In the top left menu, select "All Items"<br>
**Expected Results:** User is redirected to the Products page<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Navigate to a product page and return to main page<br>
**Description:** Verify if is possible to navigate to a product page and return to main page<br>
**Prerequisites:** User has an valid account and it's logged<br>
**Test Steps:** Select a random product title > in the top left menu, select "All Items"<br>
**Expected Results:** User is redirected to the Products page<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Navigate to cart page<br>
**Description:** Verify if is possible to navigate to the cart page<br>
**Prerequisites:** User has an valid account and it's logged<br>
**Test Steps:** Select the cart icon<br>
**Expected Results:** User is redirected to the Cart page<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Navigate to all checkout page<br>
**Description:** Verify if is possible to navigate to all  checkout page's screens<br>
**Prerequisites:** User has an valid account, it's logged and has itens in cart<br>
**Test Steps:** Select the cart icon > Click "Checkout" > Insert any information and click "Continue" > Click "Finish"<br>
**Expected Results:** User navigate all 4 "Checkout" pages<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Navigate to about page<br>
**Description:** Verify if is possible to navigate about page<br>
**Prerequisites:** User has an valid account and it's logged<br>
**Test Steps:** In the top left menu, select "About"<br>
**Expected Results:** User is redirected to Sauce Labs main site<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>

##### Logout
**Test Case:** Logout <br>
**Description:** Verify if after clicking "Logout", the user is redirected to the login page<br>
**Prerequisites:** User has an valid account and it's logged<br>
**Test Steps:** In the top left menu, select Logout<br>
**Expected Results:** User is redirected to the login page<br>
**Actual Results:** The expected one<br>
**Status:** Pass<br>
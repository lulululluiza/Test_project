# Casos de teste
#### Fluxo de autenticação
##### User Login
<b>Scenario</b>: Logging in with the correct credentials (standard_user)
<b>Given</b> the user has an account
<b>And</b> the user is on the login page
<b>When</b> the user enter a valid username and password
<b>Then</b> the user is redirected to the main page

<b>Scenario</b>: Logging in with a locked out user
<b>Given</b> the user has an account
<b>And</b> the user is on the login page
<b>When</b> the user enter the username of a locked out user and the default password
<b>Then</b> the user is not redirected and a error message is displayed

<b>Scenario</b>: Logging in with a problem user
<b>Given</b> the user has an account
<b>And</b> the user is on the login page
<b>When</b> the user enter the username of a problem user and the default password
<b>Then</b> the user is redirected to the main page and all the product images are the same

<b>Scenario</b>: Logging in with a performance glitch user
<b>Given</b> the user has an account
<b>And</b> the user is on the login page
<b>When</b> the user enter the username of a performance issue user and the default password
<b>Then</b> the user is redirected to the main page after a delay

<b>Scenario</b>: Logging in with a error user
<b>Given</b> the user has an account
<b>And</b> the user is on the login page
<b>When</b> the user enter the username of a error user and the default password
<b>Then</b> the user is redirected to the main page and SLA MEU, NAO ACHEI O ERRO DESSE USER KKKK

<b>Scenario</b>: Logging in with a visual user
<b>Given</b> the user has an account
<b>And</b> the user is on the login page
<b>When</b> the user enter the username of a visual user and the default password
<b>Then</b> the user is redirected to the main page and many layout details are off (product image, cart position, title position...) 

<b>Scenario</b>: Logging in a wrong username
<b>Given</b> the user is on the login page
<b>When</b> the user enter a invalid username
<b>Then</b> the user is not redirected and a error message is displayed

<b>Scenario</b>: Logging in a wrong password
<b>Given</b> the user is on the login page
<b>When</b> the user enter a invalid password
<b>Then</b> the user is not redirected and a error message is displayed

<b>Scenario</b>: Logging without inserting credentials
<b>Given</b> the user is on the login page
<b>When</b> the user enter a invalid password
<b>Then</b> the user is not redirected and a error message is displayed

<b>Scenario</b>: Retrying valid login (standard_user) after closing an alert
<b>Given</b> the user is on the login page
<b>And</b> the user wrote one of the credentials wrong 
<b>And</b> the user tried and failed to login 
<b>When</b> the user closes the warning for the failed login
<b>And</b> the user enter a valid username and password
<b>Then</b> the user is redirected to the main page

##### Gerenciamento de produtos
<b>Scenario</b>: Products are sorted from Z to A
<b>Given</b> the user has an account
<b>And</b> the user has logged
<b>And</b> the user is in the products page
<b>When</b> the user select the sort option "Name (A to Z)"
<b>Then</b> the products are sorted by their titles from A to Z

<b>Scenario</b>: Products are sorted from z to a
<b>Given</b> the user has an account
<b>And</b> the user has logged
<b>And</b> the user is in the products page
<b>When</b> the user select the sort option "Name (Z to A)"
<b>Then</b> the products are sorted by their titles from Z to A

<b>Scenario</b>: Products are sorted from price low to high
<b>Given</b> the user has an account
<b>And</b> the user has logged
<b>And</b> the user is in the products page
<b>When</b> the user select the sort option "Price (low to high)"
<b>Then</b> the products are sorted by their prices from low to high

<b>Scenario</b>: Products are sorted from price high to low
<b>Given</b> the user has an account
<b>And</b> the user has logged
<b>And</b> the user is in the products page
<b>When</b> the user select the sort option "Price (high to low)"
<b>Then</b> the products are sorted by their prices from high to low

##### Processo de checkout


##### Gestão do carrinho
<b>Scenario</b>: Removing the only product in the cart
<b>Given</b> the user has an account
<b>And</b> the user has logged
<b>And</b> the user is in the products page
<b>When</b> the user click "Add to cart" in one of the products
<b>And</b> the user click the cart icon with a "1" symbol added
<b>When</b> the user click "Remove" 
<b>Then</b> the product should be removed from the cart

<b>Scenario</b>: Removing all products in the cart
<b>Given</b> the user has an account
<b>And</b> the user has logged
<b>And</b> the user is in the products page
<b>When</b> the user click "Add to cart" in two of the products
<b>And</b> the user click the cart icon with a "2" symbol added
<b>When</b> the user click "Remove" in all products added
<b>Then</b> the products should be removed from the cart

##### Navegação do site


##### Logout

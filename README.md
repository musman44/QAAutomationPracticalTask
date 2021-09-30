## About Project

The purpose of this project is to Automate [http://automationpractice.com/index.php] website using Cypress and Cucumber. Please see below for the Test Cases that are automated and instructions to run these test cases 


## Install

1.  Download and Install Node.js if not done already from (https://nodejs.org/en/download/)

2.  [OPTIONAL] Download and Install VS Code IDE if not done already from (https://code.visualstudio.com/download)

3.  Install Cypress using `npm install cypress --save-dev` in VS Code or  Direct download from (https://download.cypress.io/desktop)

4.  Clone the repo from ()

5.  Open project folder (QAAutomationPracticalTask) in VS Code

6.  To install cucumber and other dependencies, in VS Code run command `npm install --save-dev cypress-cucumber-preprocessor`

7.  Launch Cypress UI and open project folder (QAAutomationPracticalTask) in Cypress 

## Run tests
**CLI** - Run following command in VS Code terminal
 
```
npx cypress run --browser firefox
```
**Cypress UI** - Run on Cypress UI
 
	On Cypress UI window, click any feature file to run tests inside it 

8.  Following technologies are used in this project 

## Technology used:

 - Cypress 
 - Cucumber

9.  Following test cases are automated 

## Test Cases:
** Login Test Case - Automate Login functionality **  
** Steps Automated **

1. Open link [http://automationpractice.com/index.php?controller=authentication&back=my-account]
2. Login to the website using different types of users 
3. Make sure that User is logged in successfully or throw Authentication failed message in case of invalid user 

** Create Account Test Case - Automate Register New User functionality **  
** Steps Automated **

1. Open link [http://automationpractice.com/index.php?controller=authentication&back=my-account]
2. Enter valid email address and click create an account 
3. On register page, enter data for all required fields and register
4. Verify that new account is created and user is logged in successfully

** E-commerce Test Cases - Automate Add / Edit / Delete Product in Cart functionality **  
** Steps Automated **

1. Open link [http://automationpractice.com/index.php?controller=authentication&back=my-account]
2. Login to the website
3. Move your cursor over Women's link
4. Click on sub menu 'T-shirts' 
5. Mouse hover on the second product displayed 
6. 'More' button will be displayed, click on 'More' button
7. Make sure quantity is set to 2 
8. Select size 'M'
9. Select color of your choice
10. Click 'Add to Cart' button
11. Click 'Proceed to checkout' button
12. Verify that selected product is added in the cart
13. To edit product in cart, change quantity and set to 3
14. Click somewhere on the page and wait for price to update 
15. Verify that the Total price is changing and reflecting correct price (Note: Sometimes Total price not updating correctly in the app due to which test case is failing)
16. Check the selected product is available in the cart and delete it 
17. Make sure that Product is deleted from cart 
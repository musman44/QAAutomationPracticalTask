Feature: Automate Register New User functionality

    In order to verify Register New User functionality of my website
    As a user
    I want to test successful creation of a new account into the site

    Scenario Outline: Create New Account into the Site
        Given the user open login page
        When the user enters email address as "<email>"
        And the user clicks on Create Account button
        And user enters data for required fields only
            | firstName | lastName | password |  | address | city | state   | zip   | phone       |
            | Zach      | Fake     | zach123  |  | test    | test | Florida | 00000 | 123-4567-78 |
        And the user clicks on Register button
        Then new account is created and user should be logged in
        Examples:
            | email           |
            | 1470-258@123.com |


Feature: Automate Login functionality

    In order to verify Login functionality of my website
    As a user
    I want to test successful and failed Login attempts

    Scenario Outline: Successful Login
        Given the user open login page
        When the user login as "<user>"
        And the user clicks on Sign in button
        Then logged in user name should be shown
        Examples:
            | user          |
            | StandardUser1 |
            | StandardUser2 |
            | StandardUser3 |

    Scenario: Failed Login
        Given the user open login page
        When the user login as 'InvalidUser'
        And the user clicks on Sign in button
        Then "Authentication failed" should be shown

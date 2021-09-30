Feature: Automate Add Product to Cart functionality

    In order to verify Add Product to Cart functionality of my website
    As a user
    I want to test successful addition of Product in to Cart functionality

    Scenario: Login
        Given the user open login page
        When the user type in
            | username            | password |
            | test111@test111.com | test111  |
        And the user clicks on Sign in button
        Then "John Smith" should be shown

    Scenario Outline: User adds a product in cart
        Given the user selects a "<product>" tshirt
        When the user selects quantity "<quantity>"
        And the user selects size "<size>"
        And the user selects color "<color>"
        And the user add to cart
        Then the user should see selected item "<product>"
        Examples:
            | product                     | quantity | size | color |
            | Faded Short Sleeve T-shirts | 2        | M    | blue  |


    Scenario: User edits a product already added in cart
        When the user change quanity "3"
        Then the price should match


    Scenario Outline: User deletes a product from cart
        When the user deletes the "<product>"
        Then the user should not see selected item "<product>" in cart
        Examples:
            | product                     | 
            | Faded Short Sleeve T-shirts | 

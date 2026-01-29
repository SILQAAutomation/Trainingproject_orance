#Test Scenarios for Orange HRM Admin Panel

@Admin_Panel
Feature: Admin Panel

  #Scenario1 - Login to the Orange HRM System
  @Login
  Scenario Outline: Login to the System

    Given I am on Orange Main page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Sign In Button
    And I Verify Welcome Label
    When I Click on Admin Section
    Then I Access Admin Panel
    And I Search Username "<AdUser_Name>"
    Examples:
      |SCN  |Browser |User_Name |Password| AdUser_Name |
      |1    |Chrome  |Admin     |admin123| Admin      |

  #Scenario2 - Access and verify Admin Panel
  @Admin
  Scenario: Access Admin Panel


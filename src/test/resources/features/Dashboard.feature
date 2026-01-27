#Overtime

@Main_feature
Feature: Sign_in

  #Scenario1 - Success Sign In
  @Login
  Scenario Outline: Successful Sign In

    Given I am on Login Page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Login Button
    And I Verify Dashboard

    Examples:
      |SCN  |Browser |User_Name |Password |
      |1    |Chrome  |Admin     |admin123|
#Overtime

@Main_feature
Feature: Sign_in

  #Scenario1 - Success Sign In
  @sucessful_Sign_In
  Scenario Outline: Successful Sign In

    Given I am on Orange Main page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Sign In Button
    And I Verify Welcome Label

    Examples:
      |SCN  |Browser |User_Name |Password |
      |1    |Chrome  |Admin     |admin123|
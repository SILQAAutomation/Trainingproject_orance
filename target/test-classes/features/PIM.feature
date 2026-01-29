#OrangeHRM Application PIM Feature File

@Main_feature
Feature: PIM

  #Scenario1 - PIM
  @Adding_PIM
  Scenario Outline: Successful adding of PIM

    Given I am on Orange Main page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Sign In Button
    And I Verify Welcome Label
    And I click on PIM Tab
    And I Verify PIM Page
    And I Click on Add Employee Button
    And I Verify Add Employee Page
    And I Input First Name "<First_Name>" and Last Name "<Last_Name>"
    And I Click on Save Button
    And I Verify Personal Details Page


    Examples:
      |SCN  |Browser |User_Name |Password |First_Name|Last_Name |
      |1    |Chrome  |Admin     |admin123 |Raksha    |Luchun    |
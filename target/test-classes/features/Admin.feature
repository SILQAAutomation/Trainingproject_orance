#Test Scenarios for Orange HRM Admin Panel

@Admin_Panel
Feature: Admin Panel

  #Scenario1 - Add a new Admin User to the OrangeHRM System
  @Add_Admin
  Scenario Outline: Add new Admin user in Admin Panel

    Given I am on Orange Main page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Sign In Button
    And I Verify Welcome Label
    When I Click on Admin Section
    Then I Access Admin Panel
    And I Click on Add User
    And I Verify Add User Page
    And I Select Role as Admin
    And I Enter User Details "<Emp_Name>", "<nUser_Name>", "<nPassword>"
    And I Click on Save Button
    Then I Verify User Added Successfully "<nUser_Name>"
    Examples:
      |SCN  |Browser |User_Name |Password |Emp_Name  |nUser_Name |nPassword |
      |1    |Chrome  |Admin     |admin123 |Mr Pigeon San |PigeonAdmin     |admin12345 |

  #Scenario2 - Add a New ESS User to the OrangeHRM System
  @Add_ESS
  Scenario Outline: Add new ESS user in Admin Panel
    Given I am on Orange Main page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Sign In Button
    And I Verify Welcome Label
    When I Click on Admin Section
    Then I Access Admin Panel
    And I Click on Add User
    And I Verify Add User Page
    And I Select Role as ESS
    And I Enter User Details "<Emp_Name>", "<nUser_Name>", "<nPassword>"
    And I Click on Save Button
    Then I Verify User Added Successfully "<nUser_Name>"

    Examples:
      |SCN  |Browser |User_Name |Password |Emp_Name  |nUser_Name |nPassword |
      |1    |Chrome  |Admin     |admin123 |Mr Pigeon San |PigeonESS     |admin12345 |

#Scenario3 - Search for the new User in Admin Panel by Username
  @Search_User
  Scenario Outline: Search new User in Admin Panel
    Given I am on Orange Main page "<Browser>"
    And I Verify Login Page
    And I Input User Name "<User_Name>" and Password "<Password>"
    When I Click on Sign In Button
    And I Verify Welcome Label
    When I Click on Admin Section
    Then I Access Admin Panel
    Then I Verify User Added Successfully "<nUser_Name>"

    Examples:
      |SCN  |Browser |User_Name |Password |Emp_Name  |nUser_Name |nPassword |
      |1    |Chrome  |Admin     |admin123 |Mr Pigeon San |Pigeon     |admin12345 |
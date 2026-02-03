$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Admin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Test Scenarios for Orange HRM Admin Panel"
    }
  ],
  "line": 4,
  "name": "Admin Panel",
  "description": "",
  "id": "admin-panel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@Admin_Panel"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 27,
      "value": "#Scenario2 - Add a New ESS User to the OrangeHRM System"
    }
  ],
  "line": 29,
  "name": "Add new ESS user in Admin Panel",
  "description": "",
  "id": "admin-panel;add-new-ess-user-in-admin-panel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@Add_ESS"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on Orange Main page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Verify Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Input User Name \"\u003cUser_Name\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I Verify Welcome Label",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Admin Section",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I Access Admin Panel",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I Click on Add User",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Verify Add User Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Select Role as ESS",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Enter User Details \"\u003cEmp_Name\u003e\", \"\u003cnUser_Name\u003e\", \"\u003cnPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify User Added Successfully \"\u003cnUser_Name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "admin-panel;add-new-ess-user-in-admin-panel;",
  "rows": [
    {
      "cells": [
        "SCN",
        "Browser",
        "User_Name",
        "Password",
        "Emp_Name",
        "nUser_Name",
        "nPassword"
      ],
      "line": 45,
      "id": "admin-panel;add-new-ess-user-in-admin-panel;;1"
    },
    {
      "cells": [
        "1",
        "Chrome",
        "Testyboi",
        "Test@1234",
        "Testy Middle Man",
        "PigeonESS",
        "admin12345"
      ],
      "line": 46,
      "id": "admin-panel;add-new-ess-user-in-admin-panel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68800,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Add new ESS user in Admin Panel",
  "description": "",
  "id": "admin-panel;add-new-ess-user-in-admin-panel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 28,
      "name": "@Add_ESS"
    },
    {
      "line": 3,
      "name": "@Admin_Panel"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on Orange Main page \"Chrome\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Verify Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Input User Name \"Testyboi\" and Password \"Test@1234\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I Verify Welcome Label",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Admin Section",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I Access Admin Panel",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I Click on Add User",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Verify Add User Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Select Role as ESS",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Enter User Details \"Testy Middle Man\", \"PigeonESS\", \"admin12345\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify User Added Successfully \"PigeonESS\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 26
    }
  ],
  "location": "Steps.iAmOnOrangeMainPage(String)"
});
formatter.result({
  "duration": 12320330400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyLoginPage()"
});
formatter.result({
  "duration": 7785338300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testyboi",
      "offset": 19
    },
    {
      "val": "Test@1234",
      "offset": 43
    }
  ],
  "location": "Steps.iInputUserNameAndPassword(String,String)"
});
formatter.result({
  "duration": 418975100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 19851002300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyWelcomeLabel()"
});
formatter.result({
  "duration": 8298757200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAdminSection()"
});
formatter.result({
  "duration": 10326985700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAccessAdminPanel()"
});
formatter.result({
  "duration": 9844729900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddUser()"
});
formatter.result({
  "duration": 7907680600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyAddUserPage()"
});
formatter.result({
  "duration": 5701183300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectRoleAsESS()"
});
formatter.result({
  "duration": 797029700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testy Middle Man",
      "offset": 22
    },
    {
      "val": "PigeonESS",
      "offset": 42
    },
    {
      "val": "admin12345",
      "offset": 55
    }
  ],
  "location": "Steps.iEnterUserDetails(String,String,String)"
});
formatter.result({
  "duration": 25650532800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:446)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:644)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iEnterUserDetails(Steps.java:507)\r\n\tat ✽.And I Enter User Details \"Testy Middle Man\", \"PigeonESS\", \"admin12345\"(features/Admin.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PigeonESS",
      "offset": 34
    }
  ],
  "location": "Steps.iVerifyUserAddedSuccessfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1678352900,
  "status": "passed"
});
formatter.after({
  "duration": 3107600,
  "status": "passed"
});
});
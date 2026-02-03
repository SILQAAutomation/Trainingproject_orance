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
      "name": "@Admin_Panel"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 48,
      "value": "#Scenario3 - Search for the new User in Admin Panel by Username"
    }
  ],
  "line": 50,
  "name": "Search new User in Admin Panel",
  "description": "",
  "id": "admin-panel;search-new-user-in-admin-panel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Search_User"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I am on Orange Main page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I Verify Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input User Name \"\u003cUser_Name\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I Verify Welcome Label",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Click on Admin Section",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I Access Admin Panel",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I Verify User Added Successfully \"\u003cnUser_Name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "admin-panel;search-new-user-in-admin-panel;",
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
      "line": 61,
      "id": "admin-panel;search-new-user-in-admin-panel;;1"
    },
    {
      "cells": [
        "1",
        "Chrome",
        "Admin",
        "admin123",
        "Mr Pigeon San",
        "Pigeon",
        "admin12345"
      ],
      "line": 62,
      "id": "admin-panel;search-new-user-in-admin-panel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 105700,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Search new User in Admin Panel",
  "description": "",
  "id": "admin-panel;search-new-user-in-admin-panel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Search_User"
    },
    {
      "line": 3,
      "name": "@Admin_Panel"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I am on Orange Main page \"Chrome\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I Verify Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input User Name \"Admin\" and Password \"admin123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I Verify Welcome Label",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Click on Admin Section",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I Access Admin Panel",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I Verify User Added Successfully \"Pigeon\"",
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
  "duration": 8027633200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyLoginPage()"
});
formatter.result({
  "duration": 1294254100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    },
    {
      "val": "admin123",
      "offset": 40
    }
  ],
  "location": "Steps.iInputUserNameAndPassword(String,String)"
});
formatter.result({
  "duration": 484741600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 170984200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyWelcomeLabel()"
});
formatter.result({
  "duration": 7795130500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAdminSection()"
});
formatter.result({
  "duration": 1783499100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAccessAdminPanel()"
});
formatter.result({
  "duration": 6100828600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pigeon",
      "offset": 34
    }
  ],
  "location": "Steps.iVerifyUserAddedSuccessfully(String)"
});
formatter.result({
  "duration": 19419132900,
  "status": "passed"
});
formatter.after({
  "duration": 1655140800,
  "status": "passed"
});
formatter.after({
  "duration": 213101300,
  "status": "passed"
});
});
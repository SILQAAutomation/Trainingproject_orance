$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/PIM.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#OrangeHRM Application PIM Feature File"
    }
  ],
  "line": 4,
  "name": "PIM",
  "description": "",
  "id": "pim",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario1 - PIM"
    }
  ],
  "line": 8,
  "name": "Successful adding of PIM",
  "description": "",
  "id": "pim;successful-adding-of-pim",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Adding_PIM"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on Orange Main page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Verify Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Input User Name \"\u003cUser_Name\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Verify Welcome Label",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on PIM Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify PIM Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add Employee Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Add Employee Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Input First Name \"\u003cFirst_Name\u003e\" and Last Name \"\u003cLast_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Personal Details Page",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "pim;successful-adding-of-pim;",
  "rows": [
    {
      "cells": [
        "SCN",
        "Browser",
        "User_Name",
        "Password",
        "First_Name",
        "Last_Name"
      ],
      "line": 25,
      "id": "pim;successful-adding-of-pim;;1"
    },
    {
      "cells": [
        "1",
        "Chrome",
        "Admin",
        "admin123",
        "Raksha",
        "Luchun"
      ],
      "line": 26,
      "id": "pim;successful-adding-of-pim;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 73600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Successful adding of PIM",
  "description": "",
  "id": "pim;successful-adding-of-pim;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Adding_PIM"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on Orange Main page \"Chrome\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Verify Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Input User Name \"Admin\" and Password \"admin123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Verify Welcome Label",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on PIM Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify PIM Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on Add Employee Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Add Employee Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Input First Name \"Raksha\" and Last Name \"Luchun\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Personal Details Page",
  "keyword": "And "
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
  "duration": 7287713100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyLoginPage()"
});
formatter.result({
  "duration": 2419639800,
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
  "duration": 363679900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1809812400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyWelcomeLabel()"
});
formatter.result({
  "duration": 5828647500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPIMTab()"
});
formatter.result({
  "duration": 1329956300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPIMPage()"
});
formatter.result({
  "duration": 1114570800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddEmployeeButton()"
});
formatter.result({
  "duration": 1100241700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyAddEmployeePage()"
});
formatter.result({
  "duration": 637200200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raksha",
      "offset": 20
    },
    {
      "val": "Luchun",
      "offset": 43
    }
  ],
  "location": "Steps.iInputFirstNameAndLastName(String,String)"
});
formatter.result({
  "duration": 455540500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 382497500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPersonalDetailsPage()"
});
formatter.result({
  "duration": 6489502700,
  "status": "passed"
});
formatter.after({
  "duration": 1421043800,
  "status": "passed"
});
formatter.after({
  "duration": 132700,
  "status": "passed"
});
});
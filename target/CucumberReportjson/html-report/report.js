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
      "line": 6,
      "value": "#Scenario1 - Login to the Orange HRM System"
    }
  ],
  "line": 8,
  "name": "Login to the System",
  "description": "",
  "id": "admin-panel;login-to-the-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Login"
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
  "name": "I Click on Admin Section",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Access Admin Panel",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Search Username \"\u003cAdUser_Name\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-panel;login-to-the-system;",
  "rows": [
    {
      "cells": [
        "SCN",
        "Browser",
        "User_Name",
        "Password",
        "AdUser_Name"
      ],
      "line": 19,
      "id": "admin-panel;login-to-the-system;;1"
    },
    {
      "cells": [
        "1",
        "Chrome",
        "Admin",
        "admin123",
        "Admin"
      ],
      "line": 20,
      "id": "admin-panel;login-to-the-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 65100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login to the System",
  "description": "",
  "id": "admin-panel;login-to-the-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@Admin_Panel"
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
  "name": "I Click on Admin Section",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Access Admin Panel",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Search Username \"Admin\"",
  "matchedColumns": [
    4
  ],
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
  "duration": 8133935401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyLoginPage()"
});
formatter.result({
  "duration": 3863526300,
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
  "duration": 295753199,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 124433500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyWelcomeLabel()"
});
formatter.result({
  "duration": 16115269699,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAdminSection()"
});
formatter.result({
  "duration": 13004556800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAccessAdminPanel()"
});
formatter.result({
  "duration": 9816489500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "Steps.iSearchUsername(String)"
});
formatter.result({
  "duration": 8760690401,
  "status": "passed"
});
formatter.after({
  "duration": 1855771899,
  "status": "passed"
});
formatter.after({
  "duration": 120401,
  "status": "passed"
});
formatter.before({
  "duration": 27300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#Scenario2 - Access and verify Admin Panel"
    }
  ],
  "line": 24,
  "name": "Access Admin Panel",
  "description": "",
  "id": "admin-panel;access-admin-panel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Admin"
    }
  ]
});
formatter.after({
  "duration": 5431999,
  "status": "passed"
});
formatter.after({
  "duration": 30900,
  "status": "passed"
});
});
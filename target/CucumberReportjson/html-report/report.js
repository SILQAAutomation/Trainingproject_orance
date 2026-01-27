$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Overtime"
    }
  ],
  "line": 4,
  "name": "Sign_in",
  "description": "",
  "id": "sign-in",
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
      "value": "#Scenario1 - Success Sign In"
    }
  ],
  "line": 8,
  "name": "Successful Sign In",
  "description": "",
  "id": "sign-in;successful-sign-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sucessful_Sign_In"
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
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-in;successful-sign-in;",
  "rows": [
    {
      "cells": [
        "SCN",
        "Browser",
        "User_Name",
        "Password"
      ],
      "line": 17,
      "id": "sign-in;successful-sign-in;;1"
    },
    {
      "cells": [
        "1",
        "Chrome",
        "Admin",
        "admin123"
      ],
      "line": 18,
      "id": "sign-in;successful-sign-in;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 58900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful Sign In",
  "description": "",
  "id": "sign-in;successful-sign-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@sucessful_Sign_In"
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
  "duration": 8052050800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyLoginPage()"
});
formatter.result({
  "duration": 1373895200,
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
  "duration": 510541900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3571244600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyWelcomeLabel()"
});
formatter.result({
  "duration": 6174433800,
  "status": "passed"
});
formatter.after({
  "duration": 1560535200,
  "status": "passed"
});
formatter.after({
  "duration": 46500,
  "status": "passed"
});
});
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
  "duration": 51900,
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
  "duration": 7357841000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyLoginPage()"
});
formatter.result({
  "duration": 1181577200,
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
  "duration": 33148600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@placeholder\u003d\u0027Username\u0027]\"}\n  (Session info: chrome\u003d144.0.7559.97)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LT5-RAKSHAL\u0027, ip: \u0027130.1.19.197\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d144.0.7559.96 (d7b80622cfab91c265741194e7942eefd2d21811-refs/branch-heads/7559@{#3667}), userDataDir\u003dC:\\Users\\Raksha\\AppData\\Local\\Temp\\scoped_dir32620_1815234139}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, goog:processID\u003d21840.0, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57763}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d144.0.7559.97, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 250455ee345dd01bbd2b03f3fdb92938\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027Username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Login_page.username(Login_page.java:21)\r\n\tat stepdefinition.Steps.iInputUserNameAndPassword(Steps.java:131)\r\n\tat ✽.And I Input User Name \"Admin\" and Password \"admin123\"(features/Login.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyWelcomeLabel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1268243700,
  "status": "passed"
});
formatter.after({
  "duration": 3205400,
  "status": "passed"
});
});
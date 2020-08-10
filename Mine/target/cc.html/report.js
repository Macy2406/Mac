$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon application order",
  "description": "",
  "id": "amazon-application-order",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login check",
  "description": "",
  "id": "amazon-application-order;login-check",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Hompage check",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "amazon-application-order;login-check;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 12,
      "id": "amazon-application-order;login-check;;1"
    },
    {
      "cells": [
        "kumar",
        "",
        "2406"
      ],
      "line": 13,
      "id": "amazon-application-order;login-check;;2"
    },
    {
      "cells": [
        "mine",
        "",
        "0506"
      ],
      "line": 14,
      "id": "amazon-application-order;login-check;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login check",
  "description": "",
  "id": "amazon-application-order;login-check;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"kumar\" and \"2406\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Hompage check",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.launch_browser()"
});
formatter.result({
  "duration": 146696393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kumar",
      "offset": 11
    },
    {
      "val": "2406",
      "offset": 23
    }
  ],
  "location": "Step.enter_the_and(String,String)"
});
formatter.result({
  "duration": 4090798,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login()"
});
formatter.result({
  "duration": 125423,
  "status": "passed"
});
formatter.match({
  "location": "Step.hompage_check()"
});
formatter.result({
  "duration": 104398,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login check",
  "description": "",
  "id": "amazon-application-order;login-check;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"mine\" and \"0506\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Hompage check",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.launch_browser()"
});
formatter.result({
  "duration": 109319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mine",
      "offset": 11
    },
    {
      "val": "0506",
      "offset": 22
    }
  ],
  "location": "Step.enter_the_and(String,String)"
});
formatter.result({
  "duration": 266279,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login()"
});
formatter.result({
  "duration": 141005,
  "status": "passed"
});
formatter.match({
  "location": "Step.hompage_check()"
});
formatter.result({
  "duration": 91265,
  "status": "passed"
});
});
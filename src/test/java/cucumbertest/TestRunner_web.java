package cucumbertest;

import cucumber.api.testng.TestNGCucumberRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.testng.annotations.Test;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue={"stepdefinition"},
        plugin={
                "html:target/CucumberReportjson/html-report",
                "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport/Report.html",
                "pretty",
                "json:target/cucumber-reports/cucumber.json" // Specify the JSON report path
        }
        ,tags = "@Login"

)

public class TestRunner_web {
    @Test(groups = "Web", description = "Example of using TestNGCucumberRunner to invoke Cucumber")
    public void runCukes() {
        new TestNGCucumberRunner(getClass()).runCukes();
    }
}

package stepdefinition;

import com.cucumber.listener.Reporter;
import commonmethods.Utility;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import objectrepository.*;
import org.apache.bcel.generic.TABLESWITCH;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import javax.swing.plaf.basic.BasicFormattedTextFieldUI;
import java.io.File;
import java.io.IOException;
import java.sql.Driver;
import java.time.Duration;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import static java.lang.Thread.sleep;
import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;

public class Steps extends Utility {

    public static WebDriver driver;


    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies(); // Clears all cookies

    }


    @BeforeMethod
    public void setUpEdge() {
        WebDriverManager.edgedriver().setup();
        driver = new EdgeDriver();
        driver.manage().deleteAllCookies(); // Clears all cookies

    }


    @AfterMethod
    public void tearDown() {
        driver.manage().deleteAllCookies();

        if (driver != null) {
            driver.quit();
        }
    }


    public Scenario scenario;

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }


    @After
    public void tearDown(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            // calling Screenshot function
            Utility.takeScreenShot(scenario);
        }
        try {
            driver.quit();
        } catch (Exception e) {
            System.out.println(String.valueOf(e));
        }
    }


    @After
    public static void setup() {

        Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", System.getProperty("user.os"));
        Reporter.setTestRunnerOutput("Sample test runner output message");

        driver.quit();
    }


    @Given("^I am on Login Page \"([^\"]*)\"$")
    public void iAmOnLoginPage(String Browser) throws Throwable {
        if (Browser.equals("Chrome")) {
            setUp();
            driver.manage().timeouts().pageLoadTimeout(5000, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            driver.manage().window().maximize();
        } else if (Browser.equals("Edge")) {
            setUp();
            driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            driver.manage().window().maximize();
        } else {
            System.out.println("No browser found");
        }
    }


    @And("^I Verify Login Page$")
    public void iVerifyLoginPage() throws Throwable {
        WebElement loginTitle = Login_page.User_login(Steps.driver);
        Assert.assertTrue(loginTitle.isDisplayed(), "Login page is not displayed.");
    }


    @And("^I Input User Name \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputUserNameAndPassword(String uname, String pwrd) throws Throwable {
        WebElement usernameField = Login_page.User_name(Steps.driver);
        WebElement passwordField = Login_page.Password(Steps.driver);
        usernameField.sendKeys(uname);
        passwordField.sendKeys(pwrd);
    }


    @When("^I Click on Login Button$")
    public void iClickOnLoginButton() {
          WebElement signInButton = Login_page.Login(Steps.driver);
          signInButton.click();
    }


    @And("^I Verify Dashboard$")
    public void iVerifyDashboard() throws InterruptedException {
        WebDriverWait wait = new WebDriverWait(Steps.driver, 30); // Wait for up to 30 seconds
        WebElement dashboardLogo = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[@alt='client brand banner']")));
        Assert.assertTrue(dashboardLogo.isDisplayed(), "Dashboard is not displayed.");
        Thread.sleep(5000);
    }
}
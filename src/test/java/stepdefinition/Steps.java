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

    @Given("^I am on Orange Main page \"([^\"]*)\"$")
    public void iAmOnOrangeMainPage(String Browser) throws Throwable {
        if (Browser.equals("Chrome")) {
            setUp();
            driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/");
            driver.manage().window().maximize();
        } else if (Browser.equals("Edge")) {
            setUp();
            driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/");
            driver.manage().window().maximize();
        } else {
            System.out.println("No browser found");
        }
    }

    @And("^I Verify Login Page$")
    public void iVerifyLoginPage() throws Throwable {
//        WebDriverWait wait = new WebDriverWait(driver, 30);
        // Wait for username field (or company branding) to be present and visible
//        WebElement usernameField = wait.until(ExpectedConditions.visibilityOf(Login_page.username(driver)));
//        Assert.assertTrue(usernameField.isDisplayed(), "Login page username field is not displayed");
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement element = w.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//img[@alt='company-branding']")));
    }

    @And("^I Input User Name \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputUserNameAndPassword(String User_Name, String Password) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(Login_page.username(driver)));
        usernameField.clear();
        usernameField.sendKeys(User_Name);

        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(Login_page.password(driver)));
        passwordField.clear();
        passwordField.sendKeys(Password);
    }

    @When("^I Click on Sign In Button$")
    public void iClickOnSignInButton() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        // Try clicking with a simple retry to avoid StaleElementReferenceException
        int attempts = 0;
        while (attempts < 3) {
            try {
                WebElement loginBtn = Login_page.login(driver);
                wait.until(ExpectedConditions.elementToBeClickable(loginBtn));
                loginBtn.click();
                break;
            } catch (StaleElementReferenceException e) {
                attempts++;
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ignored) {
                }
                if (attempts == 3) {
                    throw e;
                }
            }
        }
    }

    @And("^I Verify Welcome Label$")
    public void iVerifyWelcomeLabel() throws Throwable {
       WebDriverWait wait = new WebDriverWait(driver, 30);// Wait for up to 30 seconds
      WebElement welcomeLabel = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//img[@alt='client brand banner']")));
      Thread.sleep(5000);
       Assert.assertTrue(welcomeLabel.isDisplayed(), "Welcome label is not displayed.");

    }

    @When("^I Click on Admin Section$")
    public void iClickOnAdminSection() {
        WebElement AdminSec = Admin_page.AdminMenu(Steps.driver);
        AdminSec.click();
    }

    @Then("^I Access Admin Panel$")
    public void iAccessAdminPanel() throws InterruptedException {
        WebDriverWait wait = new WebDriverWait(Steps.driver, 30); // Wait for up to 30 seconds
        WebElement dashboardLogo = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[@alt='client brand banner']")));
        Assert.assertTrue(dashboardLogo.isDisplayed(), "Dashboard is not displayed.");
        Thread.sleep(5000);
    }

    @And("^I Search Username \"([^\"]*)\"$")
    public void iSearchUsername(String uname) throws Throwable {
        WebDriverWait wait = new WebDriverWait(Steps.driver, 30);
        WebElement usernameField = Admin_page.User_name(Steps.driver);
        usernameField.click();
        usernameField.sendKeys(uname);
        WebElement Search = Admin_page.Searchfield(Steps.driver);
        Search.click();
        // Wait for result OR no record message
        wait.until(ExpectedConditions.or(
                ExpectedConditions.visibilityOfElementLocated(Admin_page.result_row),
                ExpectedConditions.visibilityOfElementLocated(Admin_page.no_records)
        ));
        Thread.sleep(5000);
    }
}
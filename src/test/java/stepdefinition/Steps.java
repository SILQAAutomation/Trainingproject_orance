package stepdefinition;

import com.cucumber.listener.Reporter;
import commonmethods.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import objectrepository.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import java.io.File;
import java.util.concurrent.TimeUnit;

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
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            // calling Screenshot function
            Utility.takeScreenShot(scenario);
        }
        try {
            driver.quit();
        } catch (Exception e) {
            e.printStackTrace();
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
    public void iAmOnOrangeMainPage(String Browser) {
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
    public void iVerifyLoginPage() {
        WebDriverWait w = new WebDriverWait(driver, 10);
        WebElement branding = w.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//img[@alt='company-branding']")));
        Assert.assertTrue(branding.isDisplayed(), "Login page branding is not displayed");
    }

    @And("^I Input User Name \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void iInputUserNameAndPassword(String User_Name, String Password) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(Login_page.username(driver)));
        usernameField.clear();
        usernameField.sendKeys(User_Name);

        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(Login_page.password(driver)));
        passwordField.clear();
        passwordField.sendKeys(Password);
    }

    @When("^I Click on Sign In Button$")
    public void iClickOnSignInButton() {
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
    public void iVerifyWelcomeLabel() {
       WebDriverWait wait = new WebDriverWait(driver, 30);// Wait for up to 30 seconds
      WebElement welcomeLabel = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//img[@alt='client brand banner']")));
      try { Thread.sleep(5000);} catch (InterruptedException ignored) {}
       Assert.assertTrue(welcomeLabel.isDisplayed(), "Welcome label is not displayed.");

    }

    @And("^I click on PIM Tab$")
    public void iClickOnPIMTab() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        By[] clickLocators = new By[] {
                By.xpath("//span[normalize-space()='PIM']"),
                By.xpath("//h6[normalize-space()='PIM']"),
                By.xpath("//a[normalize-space()='PIM']"),
                By.cssSelector("div.oxd-topbar-header-title")
        };

        for (By locator : clickLocators) {
            try {
                WebElement el = wait.until(ExpectedConditions.elementToBeClickable(locator));
                try {
                    el.click();
                    return;
                } catch (Exception clickEx) {
                    // fallback to JS click if normal click fails
                    try {
                        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", el);
                        return;
                    } catch (Exception jsEx) {
                        // continue to next locator
                    }
                }
            } catch (TimeoutException | StaleElementReferenceException ignored) {
                // try next locator
            }
        }

        Assert.fail("Unable to click PIM tab using known locators.");
    }

    @And("^I Verify PIM Page$")
    public void iVerifyPIMPage() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        By[] pimLocators = new By[] {
                By.xpath("//h6[normalize-space()='PIM']"),
                By.xpath("//h1[normalize-space()='PIM']"),
                By.xpath("//span[normalize-space()='PIM']"),
                By.cssSelector("div.oxd-topbar-header-title")
        };

        for (By locator : pimLocators) {
            try {
                WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
                if (el != null && el.isDisplayed()) {
                    Assert.assertTrue(true); // found
                    return;
                }
            } catch (TimeoutException ignored) {
                // try next locator
            }
        }

        // If we reach here, none of the locators matched — provide debug info
        String url = "";
        String title = "";
        try { url = driver.getCurrentUrl(); } catch (Exception ignored) {}
        try { title = driver.getTitle(); } catch (Exception ignored) {}

        Assert.fail("PIM page heading not found using known locators. Current URL: " + url + " Title: " + title);
    }

    // --- NEW: Add Employee flow steps ---
    @And("^I Click on Add Employee Button$")
    public void iClickOnAddEmployeeButton() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        By[] addLocators = new By[] {
                By.xpath("//button[normalize-space()='Add']"),
                By.xpath("//a[normalize-space()='Add Employee']"),
                By.xpath("//button[contains(@class,'add-button')]")
        };
        for (By locator : addLocators) {
            try {
                WebElement el = wait.until(ExpectedConditions.elementToBeClickable(locator));
                try { el.click(); return; } catch (Exception e) {
                    try { ((JavascriptExecutor)driver).executeScript("arguments[0].click();", el); return; } catch (Exception ignored) {}
                }
            } catch (TimeoutException | StaleElementReferenceException ignored) {}
        }
        // fallback: try page object helper if locator attempts failed
        try {
            objectrepository.PIM_page.clickAddButton(driver);
            return;
        } catch (Exception ignored) {}

        Assert.fail("Unable to click Add Employee button/link.");
    }

    @And("^I Verify Add Employee Page$")
    public void iVerifyAddEmployeePage() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        By[] addPageLocators = new By[] {
                By.xpath("//input[@placeholder='First Name']"),
                By.xpath("//h6[normalize-space()='Add Employee']"),
                By.xpath("//h1[normalize-space()='Add Employee']")
        };
        for (By locator : addPageLocators) {
            try {
                WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
                if (el != null && el.isDisplayed()) { return; }
            } catch (TimeoutException ignored) {}
        }
        Assert.fail("Add Employee page not displayed; required elements not found.");
    }

    @And("^I Input First Name \"([^\"]*)\" and Last Name \"([^\"]*)\"$")
    public void iInputFirstNameAndLastName(String firstName, String lastName) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        // Wait for inputs then enter values
        WebElement fn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='First Name']")));
        fn.clear(); fn.sendKeys(firstName);
        WebElement ln = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='Last Name']")));
        ln.clear(); ln.sendKeys(lastName);
    }

    @And("^I Click on Save Button$")
    public void iClickOnSaveButton() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        By saveLocator = By.xpath("//button[normalize-space()='Save']");
        try {
            WebElement el = wait.until(ExpectedConditions.elementToBeClickable(saveLocator));
            try { el.click(); return; } catch (Exception e) { ((JavascriptExecutor)driver).executeScript("arguments[0].click();", el); return; }
        } catch (Exception e) {
            // fallback to page object helper
            try { objectrepository.PIM_page.clickSaveButton(driver); return; } catch (Exception ignored) {}
        }
        Assert.fail("Unable to click Save button.");
    }

    @And("^I Verify Personal Details Page$")
    public void iVerifyPersonalDetailsPage() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        By[] locators = new By[] {
                By.xpath("//h6[normalize-space()='Personal Details']"),
                By.xpath("//h1[normalize-space()='Personal Details']"),
                By.xpath("//div[contains(@class,'personal-details') or contains(@class,'personalDetails')]")
        };

        for (By locator : locators) {
            try {
                WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
                if (el != null && el.isDisplayed()) {
                    return;
                }
            } catch (TimeoutException ignored) {
                // try next locator
            }
        }

        // Fallback: use page object helper (non-throwing)
        try {
            if (objectrepository.PIM_page.isPersonalDetailsVisible(driver)) {
                return;
            }
        } catch (Exception ignored) {}

        // If still not found, gather debug info and fail
        String url = "";
        String title = "";
        try { url = driver.getCurrentUrl(); } catch (Exception ignored) {}
        try { title = driver.getTitle(); } catch (Exception ignored) {}

        Assert.fail("Personal Details page not displayed. Current URL: " + url + " Title: " + title);
    }

}

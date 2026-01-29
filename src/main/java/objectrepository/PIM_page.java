package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PIM_page {
    private static WebElement element = null;

    // Object for: //span[normalize-space()='PIM']
    private static By PIM_SPAN = By.xpath("//span[normalize-space()='PIM']");
    public static WebElement PIM_Span(WebDriver driver) {
        element = driver.findElement(PIM_SPAN);
        return element;
    }

    // Click action for the PIM span
    public static void clickPIM_Span(WebDriver driver) {
        PIM_Span(driver).click();
    }

    // Object for: //h6[normalize-space()='PIM']
    private static final By PIM_H6 = By.xpath("//h6[normalize-space()='PIM']");
    public static WebElement PIM_h6(WebDriver driver) {
        element = driver.findElement(PIM_H6);
        return element;
    }

    // Click action for the PIM h6 element
    public static void clickPIM_h6(WebDriver driver) {
        PIM_h6(driver).click();
    }

    // --- Add Employee related objects ---
    private static final By ADD_BUTTON = By.xpath("//button[normalize-space()='Add']");
    public static WebElement addButton(WebDriver driver) {
        element = driver.findElement(ADD_BUTTON);
        return element;
    }
    public static void clickAddButton(WebDriver driver) {
        addButton(driver).click();
    }

    private static final By ADD_EMPLOYEE_LINK = By.xpath("//a[normalize-space()='Add Employee']");
    public static WebElement addEmployeeLink(WebDriver driver) {
        element = driver.findElement(ADD_EMPLOYEE_LINK);
        return element;
    }
    public static void clickAddEmployeeLink(WebDriver driver) {
        addEmployeeLink(driver).click();
    }

    private static final By FIRST_NAME_INPUT = By.xpath("//input[@placeholder='First Name']");
    public static WebElement firstNameInput(WebDriver driver) {
        element = driver.findElement(FIRST_NAME_INPUT);
        return element;
    }
    public static void enterFirstName(WebDriver driver, String firstName) {
        firstNameInput(driver).clear();
        firstNameInput(driver).sendKeys(firstName);
    }

    private static final By LAST_NAME_INPUT = By.xpath("//input[@placeholder='Last Name']");
    public static WebElement lastNameInput(WebDriver driver) {
        element = driver.findElement(LAST_NAME_INPUT);
        return element;
    }
    public static void enterLastName(WebDriver driver, String lastName) {
        lastNameInput(driver).clear();
        lastNameInput(driver).sendKeys(lastName);
    }

    private static final By SAVE_BUTTON = By.xpath("//button[normalize-space()='Save']");
    public static WebElement saveButton(WebDriver driver) {
        element = driver.findElement(SAVE_BUTTON);
        return element;
    }
    public static void clickSaveButton(WebDriver driver) {
        saveButton(driver).click();
    }

    // Object for: //h6[normalize-space()='Personal Details']
    private static final By PERSONAL_DETAILS_H6 = By.xpath("//h6[normalize-space()='Personal Details']");
    public static WebElement personalDetailsH6(WebDriver driver) {
        element = driver.findElement(PERSONAL_DETAILS_H6);
        return element;
    }

    /**
     * Helper that returns true if the Personal Details heading is visible.
     * Uses try/catch to avoid throwing at lookup time; caller can assert the boolean.
     */
    public static boolean isPersonalDetailsVisible(WebDriver driver) {
        try {
            return personalDetailsH6(driver).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

}

//Object for
//    private static By XXXX = By.xpath("XXXX");
//    public static WebElement XXXX(WebDriver driver) {
//        element = driver.findElement(XXXX);
//        return element;
//    }

package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Admin_page {
    private static WebElement element = null;

    //Object for Admin Tab
    private static By btn_Admin = By.xpath("//a[normalize-space()='Admin']");
    public static WebElement AdminMenu(WebDriver driver) {
        element = driver.findElement(btn_Admin);
        return element;
    }


    //Object for User Name filter field
    public static By txt_User_name = By.xpath("//label[text()='Username']/parent::div/following-sibling::div//input");
    public static WebElement User_name(WebDriver driver) {
        element = driver.findElement(txt_User_name);
        return element;
    }

    //Object for new password field
    public static By txt_Password = By.xpath("//label[text()='Password']/parent::div/following-sibling::div//input");
    public static WebElement pass(WebDriver driver) {
        element = driver.findElement(txt_Password);
        return element;
    }

    //Object for Confirm Password field
    public static By txt_Confirm_Password = By.xpath("//label[text()='Confirm Password']/parent::div/following-sibling::div//input");
    public static WebElement con_pass(WebDriver driver) {
        element = driver.findElement(txt_Confirm_Password);
        return element;
    }


    //Object for Checking Add button
    private static By btn_Add = By.xpath("//button[normalize-space()='Add']");
    public static WebElement addBtn(WebDriver driver) {
        element = driver.findElement(btn_Add);
        return element;
    }

    //Object for Checking Add User Page - dropdown to open Role selection
    private static By Select_User_Role = By.xpath("(//div[contains(text(),'-- Select --')])[1]");
    public static WebElement AddRole(WebDriver driver) {
        element = driver.findElement(Select_User_Role);
        return element;
    }

    //Object for Search button
    private static By btn_Search = By.xpath("//button[@type='submit']");
    public static WebElement Searchfield(WebDriver driver) {
        element = driver.findElement(btn_Search);
        return element;
    }


    //Object for Checking Result table rows appear
    public static By result_row =
            By.xpath("//div[@class='oxd-table-body']//div[@role='row']");


    //Object for Checking if No Records are found
    public static By no_records =
            By.xpath("//span[text()='No Records Found']");


    // Object for dropdown default placeholder (first occurrence)
    private static By ddl_Role_default = By.xpath("(//div[contains(text(),'-- Select --')])[1]");
    public static WebElement roleDefault(WebDriver driver) {
        element = driver.findElement(ddl_Role_default);
        return element;
    }

    // Precise locator for selecting the 'Admin' option inside a dropdown/list
    public static By opt_Role_Admin = By.xpath("//div[@role='option' and normalize-space(.)='Admin']");
    public static WebElement roleAdminOption(WebDriver driver) {
        element = driver.findElement(opt_Role_Admin);
        return element;
    }

    // Precise locator for selecting the 'Admin' option inside a dropdown/list
    public static By opt_Role_ESS = By.xpath("//div[@role='option' and normalize-space(.)='ESS']");
    public static WebElement roleESSOption(WebDriver driver) {
        element = driver.findElement(opt_Role_ESS);
        return element;
    }

    // Precise locator for selecting the 'Admin' option inside a dropdown/list
    public static By opt_status = By.xpath("//div[@role='option' and normalize-space(.)='Enabled']");
    public static WebElement stsEnabled(WebDriver driver) {
        element = driver.findElement(opt_status);
        return element;
    }

    //Object for Checking Add User Page - dropdown to open Role selection
    public static By txt_Emp_Name = By.xpath("//input[@placeholder='Type for hints...']");
    public static WebElement empName(WebDriver driver) {

        element = driver.findElement(txt_Emp_Name);
        return element;
    }
}

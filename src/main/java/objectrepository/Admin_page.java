package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Admin_page {
    private static WebElement element = null;

    //Object for User Name
    private static By btn_Admin = By.xpath("//a[normalize-space()='Admin']");
    public static WebElement AdminMenu(WebDriver driver) {
        element = driver.findElement(btn_Admin);
        return element;
    }


    //Object for User Name
    private static By txt_User_name = By.xpath("//label[text()='Username']/parent::div/following-sibling::div//input");
    public static WebElement User_name(WebDriver driver) {
        element = driver.findElement(txt_User_name);
        return element;
    }

    //Object for User Name
    private static By btn_Search = By.xpath("//button[@type='submit']");
    public static WebElement Searchfield(WebDriver driver) {
        element = driver.findElement(btn_Search);
        return element;
    }

    public static By result_row =
            By.xpath("//div[@class='oxd-table-body']//div[@role='row']");

    public static By no_records =
            By.xpath("//span[text()='No Records Found']");
}

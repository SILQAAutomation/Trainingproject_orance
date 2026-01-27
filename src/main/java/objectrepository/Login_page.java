package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Login_page {
    private static WebElement element = null;

    //Objects
    //Object for User Login Title
    private static By lbl_User_login = By.xpath("//img[@alt='company-branding']");
    public static WebElement User_login(WebDriver driver) {
        WebDriverWait wait = new WebDriverWait(driver, 50);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(lbl_User_login));
    }

    //Object for User Name
    private static By txt_User_name = By.xpath("//input[@placeholder='Username']");
    public static WebElement User_name(WebDriver driver) {
        element = driver.findElement(txt_User_name);
        return element;
    }

    //Object for Password
    private static By txt_Password = By.xpath("//input[@placeholder='Password']");
    public static WebElement Password(WebDriver driver) {
        element = driver.findElement(txt_Password);
        return element;
    }

    //Object for Login Button
    private static By btn_Login = By.xpath("//button[@type='submit']");
    public static WebElement Login(WebDriver driver) {
        element = driver.findElement(btn_Login);
        return element;
    }

    //Object for Welcome
    private static By lbl_welcome = By.xpath("//img[@alt='client brand banner']");
    public static WebElement welcome(WebDriver driver) {
        element = driver.findElement(lbl_welcome);
        WebDriverWait wait = new WebDriverWait(driver, 50);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(lbl_welcome));
    }



}

//h3[normalize-space()='Welcome, Admin Admin']
//Object for About Us
//    private static By XXXX = By.xpath("XXXX");
//    public static WebElement XXXX(WebDriver driver) {
//        element = driver.findElement(XXXX);
//        return element;
//    }


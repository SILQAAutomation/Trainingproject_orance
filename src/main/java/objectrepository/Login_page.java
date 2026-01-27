package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Login_page {
    private static WebElement element = null;

    //Objects
//Object for company branding
    private static By img_company_branding = By.xpath("//img[@alt='company-branding']");
    public static WebElement company_branding(WebDriver driver) {
        element = driver.findElement(img_company_branding);
        return element;
    }

    //Object for username/ field
    private static By txt_username = By.xpath("//input[@placeholder='Username']");
    public static WebElement username(WebDriver driver) {
        return driver.findElement(txt_username);

    }

    //Object for Password field
    private static By txt_password = By.xpath("//input[@placeholder='Password']");

    public static WebElement password(WebDriver driver) {
        element = driver.findElement(txt_password);
        return element;
    }

    //Object for Login button
    private static By btn_login = By.xpath("//button[normalize-space()='Login']");
    public static WebElement login(WebDriver driver) {
        element = driver.findElement(btn_login);
        return element;
    }

    //Object for client brand banner
    private static By img_client_brand_banner = By.xpath("//img[@alt='client-brand-banner']");
    public static WebElement client_brand_banner(WebDriver driver) {
        element = driver.findElement(img_client_brand_banner);
        return element;
    }

}

//Object for
//    private static By XXXX = By.xpath("XXXX");
//    public static WebElement XXXX(WebDriver driver) {
//        element = driver.findElement(XXXX);
//        return element;
//    }



//Object for
//    private static By XXXX = By.xpath("XXXX");
//    public static WebElement XXXX(WebDriver driver) {
//        element = driver.findElement(XXXX);
//        return element;
//    }


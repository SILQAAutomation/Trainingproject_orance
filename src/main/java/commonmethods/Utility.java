package commonmethods;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.util.Random;

import static com.google.common.io.Files.copy;

public class Utility {

    public static WebDriver driver;

    public static void takeScreenShot(Scenario scenario) {
        try
        {
            File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            String screenshotName = scenario.getName().replaceAll(" ", "_");
            File destinationPath = new File(System.getProperty("user.dir") + "/ExtentReport/screenshots/" + screenshotName + generateRandomString(5) + ".png");
            copy(sourcePath, destinationPath);
            System.out.println("Path to file to add "+destinationPath.toString());
            Reporter.addScreenCaptureFromPath(destinationPath.toString());
        }
        catch (Exception e) {
            System.out.println("Unable to take screenshot");
            System.out.println(e);

        }
    }
    public static String generateRandomString( int length)
    {
        String candidateChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++)
        {
            sb.append(candidateChars.charAt(random.nextInt(candidateChars
                    .length())));
        }

        return sb.toString();
    }


}


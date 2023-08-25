import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.junit.Assert;

public class TN2Test {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        String baseURL = "http://localhost:3000";

        driver.get(baseURL);
        
        Assert.assertEquals("Get Github Repos", driver.findElement(By.tagName("h1")).getText());

        driver.quit();
    }
}

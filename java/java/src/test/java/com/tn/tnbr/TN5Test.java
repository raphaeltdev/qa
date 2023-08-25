import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.junit.Assert;

public class TN5Test {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        String baseURL = "http://localhost:3000";

        driver.get(baseURL);

        Assert.assertEquals("Found 18 Repos", driver.findElement(By.className("repo-amount")).getText());

        Assert.assertEquals("Github user not found", driver.findElement(By.tagName("strong")).getText());
        Assert.assertEquals("No repos", driver.findElement(By.className("output-status-text")).getText());

        driver.quit();
    }
}

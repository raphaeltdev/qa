import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.junit.Assert;

public class TN1Test {
    public static void main(String[] args) {
        
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        
        String baseURL = "http://localhost:3000";

        
        driver.get(baseURL);

        
        Assert.assertEquals("Get Github Repos", driver.getTitle());
        Assert.assertEquals("Github Username", driver.findElement(By.tagName("label")).getText());
        Assert.assertNotNull(driver.findElement(By.className("input-area")));
        Assert.assertNotNull(driver.findElement(By.id("username")));
        Assert.assertEquals("Go", driver.findElement(By.className("submit")).getText());
        Assert.assertEquals("No repos", driver.findElement(By.className("output-status-text")).getText());

        
        driver.quit();
    }
}

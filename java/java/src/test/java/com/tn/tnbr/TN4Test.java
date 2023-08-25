import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.junit.Assert;

public class TN4Test {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        String baseURL = "http://localhost:3000";

        driver.get(baseURL);

        List<WebElement> repoRows = driver.findElements(By.className("repo-row"));
        for (WebElement row : repoRows) {
            Assert.assertNotNull(row.findElement(By.className("repo-name")));  
            Assert.assertNotNull(row.findElement(By.className("repo-description")));  

        }

        driver.quit();
    }
}

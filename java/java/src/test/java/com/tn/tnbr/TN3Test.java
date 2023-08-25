import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.junit.Assert;

public class TN3Test {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path_to_chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        String baseURL = "http://localhost:3000";

        driver.get(baseURL);

        WebElement inputField = driver.findElement(By.id("username"));
        inputField.sendKeys("testInput");
        Assert.assertEquals("testInput", inputField.getAttribute("value"));
        
        WebElement goButton = driver.findElement(By.className("submit"));
        goButton.click();

        inputField.sendKeys(Keys.ENTER);

        driver.quit();
    }
}

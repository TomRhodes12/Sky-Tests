
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function SkyTest4(){
 
       var searchString = "sky";
       var searchString2 = "Sky Shop";

 
         let driver = await new Builder().forBrowser("chrome").build();
 
        
        await driver.get("https://www.sky.com/");
            
        
        await driver.findElement(By.xpath("//*[@id="masthead-search-toggle"]/svg")).click();
        await driver.findElement(By.xpath("//*[@id="masthead-navigation"]/div/div[1]/div[2]/div/div/div/div/div/div/div/input")).sendKeys(searchString,Key.RETURN);
       
       check = await driver.findElement(By.xpath("//*[@id="polaris"]/div/div/div/section[1]/div/div/div/div/div[1]/a")).getText
 
        assert.equal(check, "searchString2", "Pass");
       
 
        
        await driver.quit();
 
}
 
SkyTest4()
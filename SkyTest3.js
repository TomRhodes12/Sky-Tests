
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function SkyTest3(){
 
       
 
      
       let driver = await new Builder().forBrowser("chrome").build();
 
        
        await driver.get("https://www.sky.com/deals");
            

        price1 = await driver.findElement(By.xpath("///*[@id="deal-ultimate-tv"]/div/div[1]/div/div[2]/div/span")).getText
        price2 = await driver.findElement(By.xpath("//*[@id="deal-sky-tv-and-sky-sports"]/div/div[2]/div/div[2]/div/span")).getText
        price3 = await driver.findElement(By.xpath("//*[@id="deal-sky-tv-netflix-and-cinema"]/div/div[1]/div/div[2]/div/span")).getText      
        
        var assert = require('assert');
        assert.equal(price1, "£27", "Pass");
        assert.equal(price2, "£45", "Pass");
        assert.equal(price3, "£38", "Pass");
        
        await driver.quit();
 
}
 
SkyTest3()
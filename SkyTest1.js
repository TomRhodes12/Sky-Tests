const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


async function skyTest1(){
  
 
    
       let driver = await new Builder().forBrowser("chrome").build();
 
        
        await driver.get("https://www.sky.com/");
            
        
        await driver.findElement(By.xpath("//*[@id="masthead-navigation"]/div/div[1]/div[1]/nav/ul/li[5]/div/div[1]/a")).click();
 
        
        var url = await driver.getUrl();
        console.log('Url is:',url);

        var assert = require('assert');
        assert.equal(url, "https://www.sky.com/deals", "Pass");
 
        
        await driver.quit();
}
skyTest1()
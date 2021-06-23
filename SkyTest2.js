
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function skyTest2(){
  var searchString = "skyTest2";
  var searchString2 = "Password"
  var searchString3 = "Sorry, we did not recognise either your username or password";
 
    
       let driver = await new Builder().forBrowser("chrome").build();
 
        
        await driver.get("https://www.sky.com/");
            
        
        await driver.findElement(By.xpath("//*[@id="masthead"]/div[4]/a")).click();
        await driver.findElement(By.name("username")).sendKeys(searchString,Key.RETURN);
        await driver.findElement(By.name("password")).sendKeys(searchString2,Key.RETURN);
       
       message = await driver.findElement(By.xpath("//*[@id="signInPanel"]/div[1]/div[2]/div/ul/li")).getText      
        
        var assert = require('assert');
        assert.equal(message, "searchString3", "Pass");
 
        
        await driver.quit();
 
}
 
skyTest2()
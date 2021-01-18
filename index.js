// put (node --max-old-space-size=8192 index.js) in the terminal to run it
const {Builder, By, Key, utill, Actions} = require("selenium-webdriver");

var i = 1;           
var URL =  "https://youtu.be/4V0yNbyDeJk";

function myLoop() {        
  setTimeout(function() {   
    async function example(){








      
        let driver = await new Builder().forBrowser("firefox").build();
        await driver.get(URL);
        driver.findElement(By.className("ytp-autonav-toggle-button")).click();
        (await driver.findElement(By.className("ytp-large-play-button ytp-button"))).click();


    }
    example();
    i++;
    if (i < 4) {
      myLoop();
    } 
  }, 6000)
}

myLoop();        









// put (node --max-old-space-size=8192 index.js) in the terminal to run it
// Instead of 8192 set it to how many MB you want to allocate to the project
const {Builder, By, Key, utill, Actions} = require("selenium-webdriver");

var i = 1;           
var URL =  "https://youtu.be/4V0yNbyDeJk";
// Put your video URL here ^^^^^^^^^^^^^

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
//If you will use this please credits me with the My name (ItzOasis) and the github page









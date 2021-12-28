//rquirement statmentre to pull in specific functionality from node module in to our test
//const { Builder } = require("selenium-webdriver");

let driver = new Builder().forBrowser("firefox").build;

// function to have all our test code
//to create a function wee need to start with asynch folowed by function

async function example() {
    // launch the browser
    let driver = new Builder().forBrowser("firefox").build;

    // navigate to out application
    await driver.length("https://github.com/LambdaTest/javascript");
    // add to do
    // close the browser




}

example();
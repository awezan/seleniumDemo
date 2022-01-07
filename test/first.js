//rquirement statmentre to pull in specific functionality from node module in to our test

const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();



// describe block
describe("add to do test", function() {

    // it block
    it("successfuly add to do to application", async function() {
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("https://LambdaTest.github.io/sample-todo-app");

        // add to do
        await driver
            .findElement(By.id("sampletodotext"))
            .sendKeys("Learn Selenium", Key.RETURN);

        // assert
        let todoText = await driver
            .findElement(By.xpath("//li[last()]"))
            .getText().then(function(value) {
                return value;
            });

        //assert using chai should
        todoText.should.equal("Learn Selenium");

        //close Browser
        await driver.quit();

    });

});
//rquirement statmentre to pull in specific functionality from node module in to our test
const { Builder } = require("selenium-webdriver");


async function example() {
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://LambdaTest.github.io/sample-todo-app")





}

example();
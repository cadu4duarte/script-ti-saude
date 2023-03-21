const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://clinic.tisaude.com/#/');

    // Insere o email
    await driver.findElement(By.id("q-field__native q-placeholder"))
      .sendKeys('CarlosDuarteEduardo');

    // Insere a senha
    // await driver.findElement(By.css('input[data-cy="password"]'))
    //   .sendKeys('@Cae401197');

    // Clica no botão "Entrar"
    // await driver.findElement(By.css('button[data-cy="btn_login"]'))
    //   .click();

    // Espera pelo carregamento da página
    await driver.wait(until.urlIs('https://clinic.tisaude.com/#/dashboard'), 10000);
  } finally {
    console.log("thats ok")
  }
})();
const Main = require('../pageobjects/main.newpage')

describe('Multiple Test', () => {
    it('Clicking buttons', async () => {
        await Main.open(`simple-html-elements-for-automation`);
        await Main.btnId.click();
        browser.pause(3000);
        browser.back();
        await Main.btnLinkText.click();
        browser.pause(3000);
        browser.back();  
        await Main.btnClassName.click();
        browser.pause(3000);
        browser.back();
        await Main.btnName.click();
        browser.pause(3000);
        browser.back();
        
        /* await Main.login();
        browser.pause(5000);
        await Main.search(); */
        /* await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!') */
        /*await LoginPage.open(`users/sign_in`);
        await LoginPage.login();
        browser.pause(5000);
        await LoginPage.search();
        /* await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!') */
    })
})



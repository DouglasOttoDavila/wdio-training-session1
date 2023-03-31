const Main = require('../pageobjects/main.page')

describe('Multiple Test', () => {
    it('Clicking buttons', async () => {
        await Main.open(`simple-html-elements-for-automation`);
        await Main.clickAllBtnOnTop();
        
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



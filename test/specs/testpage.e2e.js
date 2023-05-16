const Main = require('../pageobjects/main.page')

describe('Multiple Test', () => {
    it('Performing actions on main page', async () => {
        await Main.open('simple-html-elements-for-automation', 'ultimateqa');
        console.log("|LOG| The title of the page is: " + await browser.getTitle());
        console.log("|LOG| The page has successfuly loaded.");
        //await Main.clickAllBtnOnTop("https://ultimateqa.com","/button-success", "/link-success/"); //Those are the parameters (values) for the function
        //await Main.emailMeFunction();
        await Main.clickRadioBtn();
        await Main.clickCheckboxes();
        await Main.selectFromDropdown();

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



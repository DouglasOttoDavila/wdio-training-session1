const LoginPage = require('../pageobjects/login.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open(`users/sign_in`);
        await LoginPage.login();
        /* await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!') */
    })
})



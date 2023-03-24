const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends NewPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@id="user[email]"]');
    }

    get inputPassword () {
        return $('//input[@id="user[password]"]');
    }

    get btnSubmit () {
        return $(`//button[@type="submit"]`);
    }

    get searchInput () {
        return $(`//input[@type="search"]`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.inputUsername.setValue('douglas.davila+automationtraining@objectedge.com');
        await this.inputPassword.setValue('S3cur!ty');
        await this.btnSubmit.click();
    }

    async search () {
        await this.searchInput.setValue('ANYWORD');
        await browser.keys('Enter');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter) {
        return super.open(parameter);
    }
}

module.exports = new Main();

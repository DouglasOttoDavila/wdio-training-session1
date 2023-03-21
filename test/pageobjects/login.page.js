

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
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
        return $('#login-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.inputUsername.setValue('standard_user');
        await this.inputPassword.setValue('secret_sauce');
        /* await this.btnSubmit.click(); */
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter) {
        return super.open(parameter);
    }
}

module.exports = new LoginPage();

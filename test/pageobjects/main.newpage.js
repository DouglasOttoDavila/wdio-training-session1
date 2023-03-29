const NewPage = require('./newpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends NewPage {

    get btnId () {
        return $(`//a[@id="idExample"]`);
    }

    get btnLinkText () {
        return $(`//a[text()="Click me using this link text!"]`); 
    }

    get btnClassName () {
        return $(`//button[@class="buttonClass"]`);
    }

    get btnName () {
        return $(`//button[@name="button1"]`);
    }

    async login () {
        await this.inputUsername.setValue('douglas.davila+automationtraining@objectedge.com');
        await this.inputPassword.setValue('S3cur!ty');
        await this.btnSubmit.click();
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter) {
        return super.open(parameter);
    }
}

module.exports = new Main();

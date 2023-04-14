const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends Page {

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

    get inputUsername () {
        return $(`//input[@id="et_pb_contact_name_0"]`);
    }

    get inputEmail () {
        return $(`//input[@id="et_pb_contact_email_0"]`);
    }

    get btnEmailMe () {
        return $(`//button[@name="et_builder_submit_button"]`);
    }

    get confMessage () {
        return $('//div[@id="et_pb_contact_form_0"]/div[@class="et-pb-contact-message"]/p');
    }

    async emailMeFunction () {
        await this.inputUsername.setValue('Douglas');
        await this.inputEmail.setValue('douglas.davila@objectedge.com');
        await browser.pause(5000);
        await this.btnEmailMe.click();
        await browser.pause(5000);
        await expect(this.confMessage).toHaveText('Thanks for contacting us'); 
        await expect(this.confMessage).toBeDisplayed(); 
    
        if (this.confMessage.isDiplayed() == true) {
            await expect(this.confMessage).toHaveText('Thanks for contacting us');    
        }

        //TO CHECK NEXT SESSION - OBJECT PROMISSE
        /* let confirmationMessage = this.confMessage.getText();
        console.log(`The confirmation message is: ${confirmationMessage}`); */

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter) {
        return super.open(parameter);
    }

    async clickAllBtnOnTop() {
        await this.btnId.click();
        browser.pause(3000);
        browser.back();
        await this.btnLinkText.click();
        browser.pause(3000);
        browser.back();  
        await this.btnClassName.click();
        browser.pause(3000);
        browser.back();
        await this.btnName.click();
        browser.pause(3000);
        browser.back();
    }
}

module.exports = new Main();

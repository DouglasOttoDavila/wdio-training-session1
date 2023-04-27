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

    get radioMaleSelector(){
        return $('//input[@value="male"]');
    }

    get radioFemaleSelector(){
        return $('//input[@value="female"]');
    }

    get checkBoxCar() {
        return $('//input[@value="Car"]');
    }

    get checkBoxBike() {
        return $('//input[@value="Bike"]');
    }

    get dropdownSelect() {
        return $('//select');
    }

    async selectFromDropdown() {
        const log1 = await this.dropdownSelect.getValue();
        console.log(`LOG MESSAGE 1: Dropdown Value is ${log1}`);
        await this.dropdownSelect.selectByAttribute('value', 'opel');
        const log2 = await this.dropdownSelect.getValue();
        console.log(`LOG MESSAGE 2: Dropdown Value is ${log2}`);
    }

    async clickCheckboxes() {
        await this.checkBoxCar.click();
        await this.checkBoxBike.click();
        await expect(this.checkBoxCar).toBeSelected();
        await expect(this.checkBoxBike).toBeSelected();
        await browser.pause(5000);
    }

    async clickRadioBtn(){
        await this.radioMaleSelector.click();
        await expect(this.radioMaleSelector).toBeSelected();
        await browser.pause(5000);
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

    async clickAllBtnOnTop(baseUrl, btnSuccess, linkSuccess) {
        //const baseUrl = "https://ultimateqa.com";  
        await this.btnId.click();
        await expect(browser).toHaveUrl(`${baseUrl}${btnSuccess}`);
        await browser.pause(3000);
        await browser.back();
        await this.btnLinkText.click();
        await expect(browser).toHaveUrl(`${baseUrl}${linkSuccess}`);
        await browser.pause(3000);
        await browser.back();  
        await this.btnClassName.click();
        await expect(browser).toHaveUrl(`${baseUrl}${btnSuccess}?`);
        await browser.pause(3000);
        await browser.back();
        await this.btnName.click();
        await expect(browser).toHaveUrl(`${baseUrl}${btnSuccess}/?button1=`);
        await browser.pause(3000);
        await browser.back();
    }
}

module.exports = new Main();

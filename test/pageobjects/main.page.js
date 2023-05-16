const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends Page {

    // CREATE YOUR SELECTORS HERE ↓ //
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
        return $('//select'); //creates the selector for the dropdown. 
    }

    // CREATE YOUR FUNCTIONS HERE ↓ //
    async selectFromDropdown() {
        console.log("|LOG| Started selecting Dropdown!");
        var log1 = await this.dropdownSelect.getValue(); //Creates a variable to store the value of the dropdown, BEFORE changing it
        console.log(`LOG MESSAGE 1: Dropdown Value is ` + log1); //Adds a console message printing the DEFAULT value of the dropdown ("Volvo")
        await this.dropdownSelect.selectByAttribute('value', 'opel'); //Selects a new value from the dropdown, considering the attribute "value" and the attribute's value "opel"
        log1 = await this.dropdownSelect.getValue(); //Creates a variable to store the value of the dropdown, AFTER it was changed
        console.log(`LOG MESSAGE 2: Dropdown Value is ${log1}`); //Adds a console message printing the CURRENT value of the dropdown ("Opel")
        console.log("|LOG| Dropdown has been selected!");
    }

    async clickCheckboxes() {
        await this.checkBoxCar.click(); //Clicks on the checkbox CAR
        await this.checkBoxBike.click(); //Clicks on the checkbox BIKE
        await expect(this.checkBoxCar).toBeSelected(); //Expects the checkbox CAR to be selected. If not selected, test will fail.
        await expect(this.checkBoxBike).toBeSelected(); //Expects the checkbox BIKE to be selected. If not selected, test will fail.
        await browser.pause(5000);
    }

    //Clicks one of the radio buttons (Male, Female, Other)
    async clickRadioBtn(){
        await this.radioMaleSelector.click();
        await expect(this.radioMaleSelector).toBeSelected(); //Expects the radioBox element to be selected. If not selected, test will fail.
        await browser.pause(5000);
    }

    async emailMeFunction () {
        await this.inputUsername.setValue('Douglas'); //Sets the value of the input field "Name" to "Douglas"
        await this.inputEmail.setValue('douglas.davila@objectedge.com'); //Sets the value of the input field "Email" to "douglas.davila@objectedge"
        await browser.pause(5000); //Pauses the browser for 5 seconds - Good for debugging
        await this.btnEmailMe.click(); //Clicks on the button "Email Me"
        await browser.pause(5000);
        await expect(this.confMessage).toHaveText('Thanks for contacting us'); //Expects the confirmation message to have the text "Thanks for contacting us". If not, test will fail.
        await expect(this.confMessage).toBeDisplayed(); //Expects the confirmation message to be displayed. If not, test will fail.
    
        //Not necessary, only for learning purposes ↓
        //If the confirmation message is displayed, then expects the text to be "Thanks for contacting us". 
        //If message is displayed, and the text is different, then test will fail. 
        //If message is not displayed, assertion inside IF will not execute and test will NOT fail.
        if (this.confMessage.isDiplayed() == true) { 
            await expect(this.confMessage).toHaveText('Thanks for contacting us');    
        }

        //Prints the text of the confirmation message
        const confirmationMessage = await this.confMessage.getText(); //Creates a const to store the text of the confirmation message
        console.log(`The confirmation message is: ${confirmationMessage}`); //Prints the confirmation message

    }

    //Creates a function to click on all buttons on top of the page
    async clickAllBtnOnTop(baseUrl, btnSuccess, linkSuccess) {
        await this.btnId.click(); //Clicks on the button with ID "idExample"
        await expect(browser).toHaveUrl(`${baseUrl}${btnSuccess}`); //Expects the browser to have the URL according the parameters passed to the function. If not, test will fail.
        await browser.pause(3000); //Pause
        await browser.back();//Goes back to the previous page (home)
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

    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter) {
        return super.open(parameter);
    }
}

module.exports = new Main();

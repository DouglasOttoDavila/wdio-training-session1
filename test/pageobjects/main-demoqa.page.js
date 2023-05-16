const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends Page {

    // CREATE YOUR SELECTORS HERE ↓ //
    get btnId () {
        return $(`//a[@id="idExample"]`);
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

    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter, spec) {
        return super.open(parameter, spec);
    }
}

module.exports = new Main();

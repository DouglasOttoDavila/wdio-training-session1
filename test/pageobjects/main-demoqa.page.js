const Page = require('./page')
const Key = require ('webdriverio')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends Page {


    // CREATE YOUR SELECTORS HERE ↓ //
    get formFname () {
        return $(`#firstName`);
    }
    get formLname () {
        return $(`#lastName`);
    }
    get formEmail () {
        return $(`#userEmail`);
    }
    get formMobNumber () {
        return $(`#userNumber`);
    }

    get formBirthdayField () {
        return $(`#dateOfBirthInput`);
    }

    get formBirthdayMonth () {
        return $(`//select[@class="react-datepicker__month-select"]`);
    }

    get formBirthdayYear () {
        return $(`//select[@class="react-datepicker__year-select"]`);
    }

    get formSubjectsInput () {
        return $(`#subjectsInput`);
    }

    get formSubjectsField () {
        return $(`#subjectsContainer`);
    }

    get formCurrentAddress () {
        return $(`#currentAddress`);
    }

    get formState () {
        return $(`#state`);
    }

    get formStateInput () {
        return $(`#react-select-3-input`);
    }

    get formCity () {
        return $(`#city`);
    }

    get formCityInput () {
        return $(`#react-select-4-input`);
    }

    get uploadPicture () {
        return $(`#uploadPicture`);	
    }

    get submitForm () {
        return $(`#submit`);
    }


    // CREATE YOUR FUNCTIONS HERE ↓ //
    
    async fillStudentForm(firstname, lastname, email, number, month, year, day, gender, subjects, path, address, state, city) {
        
        await this.formFname.setValue(firstname);
        await this.formLname.setValue(lastname);
        await this.formEmail.setValue(email);
        await this.formMobNumber.setValue(number);
        await this.setBirthday(month, year, day);
        await this.setGender(gender);
        await this.formSubjectsField.click();
        await this.setSubjects(subjects);
        await this.uploadFile(path);
        await this.setState(state);
        await this.setCity(city);
        await this.formCurrentAddress.setValue(address);
        await this.submitForm.click();
    }

    async uploadFile(path) {
        const remoteFilePath = await browser.uploadFile(path)
        this.uploadPicture.setValue(remoteFilePath);
    }

    async setState(state) {
        await this.formState.click();
        await this.formStateInput.setValue(state);
        await browser.pause(1000);
        await browser.keys('Enter');
    }

    async setCity(city) {
        await this.formCity.click();
        await this.formCityInput.setValue(city);
        await browser.pause(1000);
        await browser.keys('Enter');
    }

    async setBirthday(month, year, day) {
        await this.formBirthdayField.click();
        await this.formBirthdayMonth.selectByVisibleText(month);
        await this.formBirthdayYear.selectByVisibleText(year);
        const birthdayDay = $(`//div[@class="react-datepicker__week"]/div[text()="${day}"]`);
        await birthdayDay.click();
    }

    async setGender(gender) {
        const genderSelect = $(`//label[text()="${gender}"]`);
        await genderSelect.click();
    }

    async setSubjects (subjects) {
        
        for (let i = 0; i < subjects.length; i++) {
            await this.formSubjectsInput.setValue(subjects[i]);
            await browser.pause(1000);
            await browser.keys('Enter');
            
        }
        
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open (parameter, spec) {
        return super.open(parameter, spec);
    }
}

module.exports = new Main();

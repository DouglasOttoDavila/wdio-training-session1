const Main = require('../pageobjects/main-demoqa.page')

describe('Demo QA', () => {
    it('Demo QA - Forms', async () => {
        await Main.open('automation-practice-form','demoqa');

        await Main.fillStudentForm('Doug', 
        'Davila', 
        'douglas.davila@objectedge.com', 
        '5551981270800', 
        'November', 
        '1990', 
        '4', 
        'Male',
        ['English','Hindi'],
        'test/images/photo.jpg',
        'Col. Vincent, 625',
        'NCR',
        'Delhi');
        
        await browser.pause(5000);
    })
})



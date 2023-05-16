const Main = require('../pageobjects/main-demoqa.page')

describe('Demo QA', () => {
    it('Demo QA - Forms', async () => {
        await Main.open('text-box','demoqa');
    })
})



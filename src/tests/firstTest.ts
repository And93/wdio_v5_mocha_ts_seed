describe('First', () => {

    it('fi', () => {
        browser.url('.');
        console.log(browser.$('.homeContainer').isDisplayed());
    });
});

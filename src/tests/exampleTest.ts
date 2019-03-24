import {expect} from 'chai';

describe('Example suite', () => {

    it('Example test', () => {
        browser.url('.');
        const isDisplayed = browser.$('.homeContainer').isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});

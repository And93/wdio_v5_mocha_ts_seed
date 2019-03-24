import {expect} from 'chai';

describe('First suite', () => {

    it('first test', () => {
        browser.url('.');
        const isDisplayed = browser.$('.homeContainer').isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});

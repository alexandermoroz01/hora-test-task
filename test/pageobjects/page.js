import { browser } from '@wdio/globals';

/**
 * Main page object containing all methods, selectors, and functionality
 * that is shared across all page objects
 */
export default class Page {

    defaultTimeout = 30000;

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    async open(path = '') {
        await browser.url(`https://www.demoblaze.com/${path}`);
    }

    async getElement(element) {
        if (!element) {
            throw new Error('No element selector provided!');
        }
        return await $(element);
    }


    async setElementValue(element, value) {
        try {
            await this.waitElementForDisplayed(element);
            await this.waitElementForClickable(element);
            await (await this.getElement(element)).setValue(value);
        } catch (error) {
            console.error(`Error set element value: ${element} -`, error.message);
            throw new Error(`Failed to set element value: ${element}`);
        }
    }

    async click(element) {
        try {
            await this.waitElementForDisplayed(element);
            await this.waitElementForClickable(element);
            await (await this.getElement(element)).click();
        } catch (error) {
            console.error(`Error clicking element: ${element} -`, error.message);
            throw new Error(`Failed to click element: ${element}`);
        }
    }

    async getElementText(element) {
        try {
            await this.waitElementForDisplayed(element);
            return await (await this.getElement(element)).getText();
        } catch (error) {
            console.error(`Error getting text element: ${element} -`, error.message);
            throw new Error(`Failed to get text element: ${element}`);
        }
    }

    async waitElementForDisplayed(element, timeout = this.defaultTimeout) {
        timeout = timeout ?? this.defaultTimeout;
        try {
            await (await this.getElement(element)).waitForDisplayed({ timeout });
        } catch (error) {
            console.error(`Error: Element not displayed: ${element} -`, error.message);
            throw new Error(`Element not displayed within timeout: ${element}`);
        }
    }
    
    async waitElementForClickable(element, timeout = this.defaultTimeout) {
        timeout = timeout ?? this.defaultTimeout;
        try {
            await (await this.getElement(element)).waitForClickable({ timeout });
        } catch (error) {
            console.error(`Error: Element not clickable: ${element} -`, error.message);
            throw new Error(`Element not clickable within timeout: ${element}`);
        }
    }
}

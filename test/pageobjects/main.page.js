import Page from './page.js';

class MainPage extends Page {

    async open (path = '') {
        await super.open(path);
    }

    categoriesBtnByName (name) {
        return `//a[@id="cat"]//..//a[@id="itemc" and text()='${name}']`;
    }

    itemTitle({ name, index }) {
        if (name) {
            return `//div[@id="tbodyid"]//div[contains(@class,'card')]//a[@class="hrefch" and text()='${name}']`;
        } else if (index !== undefined) {
            return `(//div[@id="tbodyid"]//div[contains(@class,'card')]//a[@class="hrefch"])[${index}]`;
        } else {
            throw new Error("Either 'name' or 'index' must be provided.");
        }
    }

    itemCostByName (name) {
        return `//div[@id="tbodyid"]//div[contains(@class,'card')]//a[@class="hrefch" and text()='${name}']//..//..//h5`;
    }

    async getItemCostByName(name){
        return await this.getElementText(this.itemCostByName(name));
    }

    async getItemTitleText({ name, index }) {
        const locator = this.itemTitle({ name, index });
        return await this.getElementText(locator);
    }

    async clickItemTitle({ name, index }) {
        const locator = this.itemTitle({ name, index });
        return await this.click(locator);
    }

}

export default new MainPage();
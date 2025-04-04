import Page from './page.js';
import { browser, expect } from '@wdio/globals';


const totalLabel = `h3#totalp`;
const placeOrderBtn = `//button[@data-target="#orderModal" and text()='Place Order']`;

class CartPage extends Page {

    async open (path = '') {
        await super.open(path);
    }

    async getTotalLabelText(){
        await browser.pause(3000);
        return await this.getElementText(totalLabel);
    }

    async clickPlaceOrderBtn(){
        await this.click(placeOrderBtn);
    }

}

export default new CartPage();

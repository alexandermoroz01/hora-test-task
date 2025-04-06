import Page from './page.js';
import { browser, expect } from '@wdio/globals';


const totalLabel = `h3#totalp`;
const placeOrderBtn = `//button[@data-target="#orderModal" and text()='Place Order']`;
const nameInput = `input#name`;
const countryInput = `input#country`;
const cityInput = `input#city`;
const creditCardInput = `input#card`;
const monthInput = `input#month`;
const yearInput = `input#year`;
const purchaseBtn = `//button[@onclick="purchaseOrder()"]`;
const successPurchaseLabel = `//h2[text()='Thank you for your purchase!']`;
const purchaseInfoLabel = `//p[@class="lead text-muted "]`;

class CartPage extends Page {

    async open (path = '') {
        await super.open(path);
    }

    async getPurchaseInfoLabelText(){
        return await this.getElementText(purchaseInfoLabel)
    }

    async waitSuccessPurchaseLabelForDisplayed(timeout){
        await this.waitElementForDisplayed(successPurchaseLabel, timeout);
    }

    async clickPurchaseBtn(){
        await this.click(purchaseBtn);
    }

    async setNameInputValue(value){
        await this.setElementValue(nameInput, value);
    }

    async setCountryInputValue(value){
        await this.setElementValue(countryInput, value);
    }

    async setCityInputValue(value){
        await this.setElementValue(cityInput, value);
    }

    async setCreditCardInputValue(value){
        await this.setElementValue(creditCardInput, value);
    }

    async setMonthInputValue(value){
        await this.setElementValue(monthInput, value);
    }

    async setYearInputValue(value){
        await this.setElementValue(yearInput, value);
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

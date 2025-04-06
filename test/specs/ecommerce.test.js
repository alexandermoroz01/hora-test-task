import { browser, expect } from '@wdio/globals';
import MainPage from '../pageobjects/main.page.js';
import ProductPage from '../pageobjects/product.page.js';
import NavigationBar from '../pageobjects/navigation.bar.js';
import CartPage from '../pageobjects/cart.page.js';
import { Helper } from '../helpers/helper.js';

describe('E-Commerce Checkout on Demoblaze', () => {
    let cards = [], costs = [];
    const data = {
        name: 'John Doe',
        country: 'Ukraine',
        city: 'Kyiv',
        credit_card: '4111111111111111',
        month: 'April',
        year: '2025'
    };

    beforeEach(`open the page`, async () => {
        await MainPage.open();
    });

    it('should complete the checkout process', async () => {
        cards.push(await MainPage.getItemTitleText({index: 1}));
        cards.push(await MainPage.getItemTitleText({index: 2}));

        costs.push(await MainPage.getItemCostByName(cards[0]));
        costs.push(await MainPage.getItemCostByName(cards[1]));

        for(let i = 0; i < 2; i++){
            await MainPage.clickItemTitle({name: cards[i]});
            await ProductPage.clickAddToCardBtn();

            if(await browser.isAlertOpen()){
                await expect(await browser.getAlertText()).toBe('Product added');
                await browser.acceptAlert();
            }
            await MainPage.open();
        }

        await NavigationBar.clickTopNavBarByName('Cart');
        expect(Number(await CartPage.getTotalLabelText())).toBe(Helper.sumArray(costs));

        await CartPage.clickPlaceOrderBtn();
        await Promise.all([
            CartPage.setNameInputValue(data.name),
            CartPage.setCountryInputValue(data.country),
            CartPage.setCityInputValue(data.city),
            CartPage.setCreditCardInputValue(data.credit_card),
            CartPage.setMonthInputValue(data.month),
            CartPage.setYearInputValue(data.year)
        ]);
        await CartPage.clickPurchaseBtn();
        await CartPage.waitSuccessPurchaseLabelForDisplayed();
        await Promise.all([
            await expect(await CartPage.getPurchaseInfoLabelText()).toContain(`Amount: ${Helper.sumArray(costs)} USD`),
            await expect(await CartPage.getPurchaseInfoLabelText()).toContain(`Name: ${data.name}`),
            await expect(await CartPage.getPurchaseInfoLabelText()).toContain(`Card Number: ${data.credit_card}`)
        ]);
    });
});

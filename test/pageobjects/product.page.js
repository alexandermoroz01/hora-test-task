import Page from './page.js';

const addToCartBtn = `//a[@class="btn btn-success btn-lg" and text()='Add to cart']`;

class ProductPage extends Page {

    async open (path = '') {
        await super.open(path);
    }

  async clickAddToCardBtn(){
    await this.click(addToCartBtn);
  }

}

export default new ProductPage();

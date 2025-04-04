import Page from './page.js';


class NavigationBar extends Page {

    async open (path = '') {
        await super.open(path);
    }

  async clickAddToCardBtn(){
    await this.click(addToCartBtn);
  }

  topNavBarByName(name){
    return `//div[@id="navbarExample"]//li[contains(@class,'nav-item')]//a[text()='${name}']`;
  }

  async clickTopNavBarByName(name){
    await this.click(this.topNavBarByName(name));
  }

}

export default new NavigationBar();

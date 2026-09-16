import { Page , Locator } from "@playwright/test";

export class addtocart{
    readonly page:Page
    readonly SauseLabsBackpack : Locator
    readonly addtocart :Locator

    constructor(page:Page){
        this.page=page;

      this.SauseLabsBackpack= page.getByText("Sause Labs Backpack");
      this.addtocart=page.getByRole('button' ,{name: 'add to cart'})

    }
    async cart(SauseLabsBackpack:string)
{
        await this.addtocart.click();
}
}
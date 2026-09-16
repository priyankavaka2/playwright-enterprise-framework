import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { AddToCart } from '../pages/addtocart';

test('Add product to cart', async ({ page }) => {
  await page.goto('/')

  const loginPage = new LoginPage(page);

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();

  const addToCart = new AddToCart(page);

  await addToCart.addProductToCart();

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');
})
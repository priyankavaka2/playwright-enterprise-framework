import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Add product to cart', async ({ page }) => {

  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page.getByText('Products')).toBeVisible();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

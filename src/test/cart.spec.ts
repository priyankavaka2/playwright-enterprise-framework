import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {

  // Open application
  await page.goto('/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify Products page
  await expect(page.getByText('Products')).toBeVisible();

  // Add Sauce Labs Backpack to cart
  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  // Verify cart contains 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await page.goto('https://www.saucedemo.com/');

    await loginPage.login('standard_user', 'secret_sauce');


    //await expect(loginPage.dashboard).toBeVisible
});
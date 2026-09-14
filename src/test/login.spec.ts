import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await page.goto('https://practice.expandtesting.com/login');

    await loginPage.login('practice', 'SuperSecretPassword!');


    //await expect(loginPage.dashboard).toBeVisible
});
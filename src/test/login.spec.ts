import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await page.goto('https://github.com/login');

    await loginPage.login('priyankavaka2', 'Shastadondapati@123');


    //await expect(loginPage.dashboard).toBeVisible
});
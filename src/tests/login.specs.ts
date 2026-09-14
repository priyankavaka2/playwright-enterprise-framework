import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await loginPage.login('Admin', 'admin123');

});
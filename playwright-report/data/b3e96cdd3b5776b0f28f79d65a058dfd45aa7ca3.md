# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login test
- Location: src/test/login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Username')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly username: Locator;
  6  |     readonly password: Locator;
  7  |     readonly loginButton: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 | 
  12 |         this.username = page.getByLabel('Username');
  13 |         this.password = page.getByLabel('Password');
  14 |         this.loginButton = page.getByRole('button', { name: 'Login' });
  15 |     }
  16 | 
  17 |     async login(username: string, password: string) {
> 18 |         await this.username.fill(username);
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  19 |         await this.password.fill(password);
  20 |         await this.loginButton.click();
  21 |     }
  22 | }
```
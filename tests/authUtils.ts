import {expect, Page} from "@playwright/test";

/**
 * Performs registration starting from `http://localhost:80/` with the given credentials.
 * @param page playwright page
 * @param email email to use for registration
 * @param firstName first name of the user
 * @param lastName last name of the user
 * @param password password to use for registration
 */
export async function register(page: Page, email: string, firstName: string, lastName: string, password: string) {
    await page.goto("http://localhost:80/")
    await page.getByText("Sign up").first().click()
    await page.fill('[id="email"]', email)
    await page.fill('[id="firstName"]', firstName)
    await page.fill('[id="lastName"]', lastName)
    await page.fill('[id="password"]', password)
    await page.fill('[id="confirmPassword"]', password)
    await page.click('[type="submit"]')
}

/**
 * Performs login at `http://localhost:80/login` with the given credentials. It also checks if the login was successful.
 * @param page playwright page
 * @param email email to use for login
 * @param firstName first name of the user
 * @param password password to use for login
 */
export async function login(page: Page, email: string, firstName: string, password: string) {
    await page.goto("http://localhost:80/login")
    await page.fill('[id="email"]', email)
    await page.fill('[id="password"]', password)
    await page.click('[type="submit"]')

    await checkHasLogin(page, email, firstName)
}

/**
 * Checks if the login was successful.
 * @param page playwright page
 * @param email email of the user
 * @param name name of the user
 */
export async function checkHasLogin(page: Page, email: string, name: string) {
    await page.click('[class=user-avatar-dropdown]')
    await expect(page.locator('.user-name').getByText(name).first()).toBeVisible()
    await expect(page).toHaveURL('http://localhost:80/sources')
    expect(await page.evaluate(() => sessionStorage.getItem('accessToken'))).toBeDefined();
    expect(await page.evaluate(() => sessionStorage.getItem('refreshToken'))).toBeDefined();
    expect(await page.evaluate(() => sessionStorage.getItem('username'))).toBe(email)
    await page.click('[class=user-avatar-dropdown]')
}

/**
 * Performs logout and checks if the logout was successful.
 * @param page playwright page
 */
export async function logout(page: Page) {
    await page.click('[class=user-avatar-dropdown]')
    await page.locator('.dropdown-item', { hasText: 'Logout' }).first().click();
    await page.waitForTimeout(4000);
}

/**
 * Checks if the logout was successful.
 * @param page playwright page
 */
export async function checkHasLogout(page: Page) {
    expect(await page.evaluate(() => sessionStorage.getItem('accessToken'))).toBeNull();
    expect(await page.evaluate(() => sessionStorage.getItem('refreshToken'))).toBeNull();
    expect(await page.evaluate(() => sessionStorage.getItem('username'))).toBeNull()
    await expect(page).toHaveURL('http://localhost:80/login')
    await expect(page.locator('.user-name')).toHaveCount(0);
}
import {expect, Page, test} from "@playwright/test"
import {register, checkHasLogin, login} from "./auth.spec";

/**
 * Creates a new source with the given name.
 * @param page playwright page
 * @param name name of the source
 */
export async function createSource(page: Page, name: string) {
    await page.getByText('New Source').click()
    await page.fill('input[placeholder="Enter the name of the new source"]', name)
    await page.click('button[type="submit"]')
    await checkHasSource(page, name)
}

/**
 * Selects a dropdown option for a source with the given name.
 * @param page playwright page
 * @param name name of the source
 * @param optionText text of the dropdown option
 */
export async function selectDropdownOptionForSource(page: Page, name: string, optionText: string) {
    const card = page
        .locator('div.card-body')
        .filter({ has: page.locator('h5', { hasText: name }) });
    await card.locator('.dropdown').click();
    await card.locator(`a.dropdown-item`, { hasText: optionText }).click();
}

/**
 * Renames a source with the given name.
 * @param page playwright page
 * @param oldName old name of the source
 * @param newName new name of the source
 */
export async function renameSource(page: Page, oldName: string, newName: string) {
    await selectDropdownOptionForSource(page, oldName, "Change Name");
    await page.fill('input[placeholder="Enter additional details"]', newName);
    await page.click('button[type="submit"]');
}

/**
 * Deletes a source with the given name.
 * @param page playwright page
 * @param name name of the source
 */
export async function deleteSource(page: Page, name: string) {
    await selectDropdownOptionForSource(page, name, "Delete");
    await page.click('button[type="submit"]');
}

/**
 * Checks if a source with the given name exists.
 * @param page playwright page
 * @param name name of the source
 * @param count number of sources with the given name
 */
export async function checkHasSource(page: Page, name: string, count: number = 1) {
    await expect(page.locator('div.card-body h5').getByText(name).first()).toHaveCount(count)
}

/**
 * Checks if there are no sources.
 * @param page playwright page
 */
export async function checkHasNoSource(page: Page) {
    await expect(page.locator('div.card-body')).toHaveCount(0)
    await expect(page.getByText("Wow...it's empty here!")).toBeVisible()
}

test.describe.serial('Source creation, deletion and rename', () => {
    const baseEmail = `user_test_sources_${Math.floor(Math.random() * 1000)}`;

    test('Has no sources', async ({ page, browserName }) => {
        const email = baseEmail + browserName + "@example.com"
        await register(page, email, "John", "Doe", "StrongPass123!")
        await checkHasLogin(page, email, "John")
        await checkHasNoSource(page)
    })

    test('Create source', async ({ page, browserName }) => {
        const email = baseEmail + browserName + "@example.com"
        await login(page, email, "John", "StrongPass123!")
        await createSource(page, "Source 1")
    })

    test('Rename source', async ({ page, browserName }) => {
        const email = baseEmail + browserName + "@example.com"
        await login(page, email, "John", "StrongPass123!")
        await renameSource(page, "Source 1", "Source 2")
        await checkHasSource(page, "Source 2")
    })

    test('Delete source', async ({ page, browserName }) => {
        const email = baseEmail + browserName + "@example.com"
        await login(page, email, "John", "StrongPass123!")
        await deleteSource(page, "Source 2")
        await checkHasSource(page, "Source 2", 0)
        await checkHasNoSource(page)
    })
})
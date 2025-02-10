import {expect, Page} from "@playwright/test";

/**
 * Creates a new source with the given name.
 * @param page playwright page
 * @param name name of the source
 */
export async function createSource(page: Page, name: string) {
    await page.getByText('New Source').click({delay: 70})
    await page.fill('input[placeholder="Enter the name of the new source"]', name)
    await page.click('button[type="submit"]', {delay: 70})
    await page.waitForTimeout(1000);
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
    await card.locator('.dropdown').click({delay: 70});
    await card.locator(`a.dropdown-item`, { hasText: optionText }).click({delay: 70});
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
    await page.click('button[type="submit"]', {delay: 70});
}

/**
 * Deletes a source with the given name.
 * @param page playwright page
 * @param name name of the source
 */
export async function deleteSource(page: Page, name: string) {
    await selectDropdownOptionForSource(page, name, "Delete");
    await page.click('button[type="submit"]', {delay: 70});
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

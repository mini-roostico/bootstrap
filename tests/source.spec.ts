import {test} from "@playwright/test"
import {checkHasNoSource, checkHasSource, createSource, deleteSource, renameSource} from "./sourceUtils";
import {checkHasLogin, login, register} from "./authUtils";


test.describe.serial('Source creation, deletion and rename', () => {
    // tests are not randomized, this is just useful for debugging locally
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
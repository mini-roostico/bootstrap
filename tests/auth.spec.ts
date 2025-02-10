import {test} from "@playwright/test";
import {checkHasLogin, checkHasLogout, login, logout, register} from "./authUtils";

test.describe.serial('User authentication', () => {
    // tests are not randomized, this is just useful for debugging locally
    const baseEmail = `user_test_auth_${Math.floor(Math.random() * 1000)}`;

    test('User registration and login', async ({page, browserName}) => {
        const email = baseEmail + browserName + "@example.com"

        await register(page, email, "John", "Doe", "StrongPass123!")
        await checkHasLogin(page, email, "John")
    })

    test("User login and logout", async ({page, browserName}) => {
        await login(page, baseEmail + browserName + "@example.com", "John", "StrongPass123!")
        await logout(page)
        await checkHasLogout(page)
    })
})
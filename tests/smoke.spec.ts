import { expect, test } from "@playwright/test";

test("renderer serves a valid page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Website Generator");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Website Generator");
});

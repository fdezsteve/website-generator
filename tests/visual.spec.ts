import { expect, test } from "@playwright/test";

test("capture current renderer", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await page.screenshot({
    path: testInfo.outputPath("page.png"),
    fullPage: true
  });

  await expect(page.locator("body")).toBeVisible();
});

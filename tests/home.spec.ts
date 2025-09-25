import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home renders and is accessible', async ({ page }) => {
  await page.goto('http://localhost:5001/fr');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Erigea Loisirs – Le leader du loisir indoor multi-activité en Île-de-France'
  );

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

import { by, element, expect, waitFor } from 'detox';

export const searchForUser = async (query: string) => {
  await element(by.id('search-input')).tap();
  await element(by.id('search-input')).typeText(query);
  await element(by.id('search-input')).typeText('\n');

  await waitFor(element(by.id('users-flatlist')))
    .toBeVisible()
    .withTimeout(3000);
};

export const enableEditMode = async () => {
  await element(by.id('edit-mode-switch')).tap();
};

export const selectUser = async (index: number) => {
  await element(by.id(`checkbox-${index}`)).tap();
  await expect(element(by.id(`checkbox-${index}`))).toBeVisible();
};

export const duplicateUser = async () => {
  await element(by.id('duplicate-button')).tap();
};

export const deleteUser = async () => {
  await element(by.id('delete-button')).tap();
};

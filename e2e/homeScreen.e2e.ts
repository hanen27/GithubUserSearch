import { by, device, element, expect } from 'detox';
import {
  enableEditMode,
  searchForUser
} from '../test-utils/e2e/e2eUtils';

describe('HomeScreen E2E Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should search for a user and display results', async () => {
  //   await searchForUser('user');
  //   await expect(element(by.id('user-item-0'))).toBeVisible();
  // });

  it('should enable edit mode and show checkboxes', async () => {
    await searchForUser('user');
    await enableEditMode();
    await expect(element(by.id('checkbox-0'))).toBeVisible();
  });

  // it('should select a user and duplicate it', async () => {
  //   await searchForUser('user');
  //   await enableEditMode();
  //   await selectUser(0);
  //   await duplicateUser();
  //   await expect(element(by.text('user (Copy 1)'))).toBeVisible();
  // });

  // it('should delete a selected user', async () => {
  //   await searchForUser('user');
  //   await enableEditMode();
  //   await selectUser(0);
  //   await duplicateUser();
  //   await expect(element(by.text('user (Copy 1)'))).toBeVisible();
  //   await selectUser(1);
  //   await deleteUser();

  //   await expect(element(by.text('user (Copy 1)'))).not.toBeVisible();
  // });
});

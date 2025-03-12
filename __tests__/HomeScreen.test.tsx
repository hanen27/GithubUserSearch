import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../src/screens/homeScreen/HomeScreen';
import { enableEditMode, searchForUser, selectUser } from '../test-utils/jest/testUtils';

jest.mock('../src/api/githubService', () =>
  require('../__mocks__/githubService'),
);
jest.mock('../src/components/Icon/Icon');

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    gcTime: 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
    retry: false,
  },
});

describe('HomeScreen - Feature Tests', () => {
  let rendered: ReturnType<typeof render>;

  beforeEach(() => {
    jest.useFakeTimers();
    rendered = render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </QueryClientProvider>,
    );
  });

  afterEach(() => {
    queryClient.clear();
    jest.useRealTimers();
  });

  afterAll(() => {
    queryClient.clear();
    jest.useRealTimers();
  });

  it('should display users when search returns results', async () => {
    await searchForUser(rendered, 'user');
  });

  it('should enable edit mode and show checkboxes', async () => {
    await searchForUser(rendered, 'user');
    await enableEditMode(rendered);
  });

  it('should select a user', async () => {
    await searchForUser(rendered, 'user');
    await enableEditMode(rendered);
    await selectUser(rendered, 'checkbox-0');
  });

  it('should duplicate a selected user', async () => {
    await searchForUser(rendered, 'user');
    await enableEditMode(rendered);
    await selectUser(rendered, 'checkbox-0');

    fireEvent.press(rendered.getByTestId('duplicate-button'));

    await waitFor(() => {
      expect(rendered.getByText('user (Copy 1)')).toBeTruthy();
    });
  });

  it('should duplicate and delete a user', async () => {
    await searchForUser(rendered, 'user');
    await enableEditMode(rendered);
    await selectUser(rendered, 'checkbox-0');

    fireEvent.press(rendered.getByTestId('duplicate-button'));

    await waitFor(() => {
      expect(rendered.getByText('user (Copy 1)')).toBeTruthy();
    });
    await selectUser(rendered, 'checkbox-1');

    fireEvent.press(rendered.getByTestId('delete-button'));

    await waitFor(() => {
      expect(rendered.queryByText('user (Copy 1)')).toBeNull();
    });

    expect(rendered.getByText('user')).toBeTruthy();
  });
});

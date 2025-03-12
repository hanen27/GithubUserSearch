import { fireEvent, RenderAPI, waitFor } from '@testing-library/react-native';

const searchForUser = async (rendered: RenderAPI, query: string) => {
  const searchInput = rendered.getByTestId('search-input');
  await waitFor(() => fireEvent.changeText(searchInput, query));
  await waitFor(() => {
    expect(rendered.getByText(query)).toBeTruthy();
  });
};

const enableEditMode = async (rendered: RenderAPI) => {
  const switchButton = rendered.getByTestId('edit-mode-switch');
  await waitFor(() => fireEvent.press(switchButton));
  await waitFor(() => {
    expect(switchButton).toHaveProp('value', true);
  });
};

const selectUser = async (rendered: RenderAPI, testID: string) => {
  const checkbox = rendered.getByTestId(testID);
  await waitFor(() => fireEvent.press(checkbox));
  await waitFor(() => {
    expect(checkbox).toBeTruthy();
  });
};

export { enableEditMode, searchForUser, selectUser };


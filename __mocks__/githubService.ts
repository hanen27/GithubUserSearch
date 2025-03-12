export const fetchGitHubUsers = jest.fn(async (query: string) => {
  if (query.toLowerCase() === 'user') {
    return [{id: 1, login: 'user'}];
  }
  return [];
});

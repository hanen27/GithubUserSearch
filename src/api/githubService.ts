import { GitHubUser } from "../types/gitHubUser.types";

export const fetchGitHubUsers = async (query: string): Promise<GitHubUser[]> => {
  if (!query.trim()) return [];

  try {
    const res = await fetch(`https://api.github.com/search/users?q=${query}`);
    if (!res.ok) throw new Error(res.status === 403 ? "GitHub API rate limit exceeded." : `API Error: ${res.statusText}`);

    const { items } = await res.json();
    return items ?? [];
  } catch (error) {
    if ((error as Error).message.includes("Network request failed")) throw new Error("Check your internet connection.");
    throw error;
  }
};
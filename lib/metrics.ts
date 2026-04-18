type Repo = {
  stargazers_count: number;
  language: string | null;
};

export function calculateMetrics(repos: Repo[]) {
  const totalRepos = repos.length;

  const totalStars = repos.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  );

  const languageCount: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const topLanguage =
    Object.entries(languageCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "N/A";

  return {
    totalRepos,
    totalStars,
    topLanguage,
  };
}
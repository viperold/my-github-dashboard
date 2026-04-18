export async function getRepos() {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener repositorios");
  }

  return res.json();
}
import { getRepos } from "@/lib/github";

export async function GET() {
  try {
    const repos = await getRepos();

    return Response.json(repos);
  } catch (error) {
    return Response.json(
      { error: "Error al obtener repos" },
      { status: 500 }
    );
  }
}
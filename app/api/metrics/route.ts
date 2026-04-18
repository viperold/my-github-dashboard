import { getRepos } from "@/lib/github";
import { calculateMetrics } from "@/lib/metrics";

export async function GET() {
  try {
    const repos = await getRepos();

    const metrics = calculateMetrics(repos);

    return Response.json(metrics);
  } catch (error) {
    return Response.json(
      { error: "Error al obtener métricas" },
      { status: 500 }
    );
  }
}
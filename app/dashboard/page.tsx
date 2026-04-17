export default function DashboardPage() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">GitHub Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold">KPIs</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-4 border rounded">Repos</div>
          <div className="p-4 border rounded">Commits 7d</div>
          <div className="p-4 border rounded">Commits 30d</div>
          <div className="p-4 border rounded">Stars</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Gráficos</h2>
        <div className="p-10 border rounded">
          (Aquí irán los gráficos)
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Repositorios</h2>
        <div className="p-10 border rounded">
          (Aquí irá la tabla)
        </div>
      </section>
    </main>
  );
}
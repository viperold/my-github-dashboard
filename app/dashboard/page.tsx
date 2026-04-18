import KpiCard from "@/components/dashboard/KpiCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard
          title="Total Repositories"
          value={42}
          subtitle="+3 este mes"
          variant="primary"
        />

        <KpiCard
          title="Activity"
          value={128}
          subtitle="últimos 30 días"
          variant="secondary"
        />

        <KpiCard
          title="System Core"
          value="Operational"
          subtitle="All systems running"
          variant="tertiary"
        />
      </section>

    </div>
  );
}
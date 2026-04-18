import RepoTable from "@/components/dashboard/RepoTable";

export default function ReposPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Repositories</h1>

      <RepoTable />
    </div>
  );
}
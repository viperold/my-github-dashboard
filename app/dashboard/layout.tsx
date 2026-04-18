import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#0a0f14] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-8">
          {children}
        </main>
      </div>

    </div>
  );
}
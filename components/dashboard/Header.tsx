export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-white/5">
      <h2 className="font-bold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <button className="bg-[#69daff] text-black px-4 py-2 rounded">
          New PR
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
      </div>
    </header>
  );
}
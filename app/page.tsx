export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">Vedran Tomicic</h1>

      <p className="text-gray-500">
        Fullstack Developer | AI | Cybersecurity
      </p>

      <a
        href="/dashboard"
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded"
      >
        Ver Dashboard
      </a>
    </main>
  );
}
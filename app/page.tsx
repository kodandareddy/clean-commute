export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Clean Commute Challenge</h1>
        <p className="text-xl text-gray-600 mb-8">
          Track your sustainable commute this October
        </p>
        <div className="space-y-4">
          <a
            href="/log"
            className="block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Log Your Commute
          </a>
          <a
            href="/dashboard"
            className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}

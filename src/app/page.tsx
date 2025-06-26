// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Telegram AdBot Automation Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Sell, manage, and control automated Telegram ad bots using crypto-based plans.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/pricing"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            View Pricing
          </Link>
          <Link
            href="/sign-in"
            className="border border-gray-400 hover:bg-gray-800 text-white py-3 px-6 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>

      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">🔁 Auto Forwarding</h3>
          <p className="text-gray-300">Send posts from your channel to 100s of marketplace groups.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📊 Analytics</h3>
          <p className="text-gray-300">Track delivery, bans, and active bot status in real-time.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">💸 Crypto Payments</h3>
          <p className="text-gray-300">BTC, SOL, ETH, XMR, TRX supported through secure checkout.</p>
        </div>
      </section>
    </main>
  );
}

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PricingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const plans = [
    {
      name: "Basic",
      accounts: 2,
      interval: "15-min",
      priceWeek: 40,
      priceMonth: 120,
    },
    {
      name: "Pro",
      accounts: 5,
      interval: "7-min",
      priceWeek: 90,
      priceMonth: 270,
    },
    {
      name: "Elite",
      accounts: 10,
      interval: "2-min",
      priceWeek: 320,
      priceMonth: 899,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-600">{plan.name} Plan</h2>
            <p className="mt-2 text-gray-600">
              {plan.accounts} Telegram Accounts
              <br />
              Post every {plan.interval}
            </p>
            <div className="mt-6">
              <p className="text-xl font-semibold text-gray-800">
                ${plan.priceWeek} / week
              </p>
              <p className="text-md text-gray-500">
                or ${plan.priceMonth} / month
              </p>
            </div>
            <form action={`/checkout?plan=${plan.name}`} method="GET">
              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

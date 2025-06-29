import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface PlanDetails {
  name: string;
  priceWeek: number;
  priceMonth: number;
  accounts: number;
  interval: string;
}

const allPlans: Record<string, PlanDetails> = {
  Basic: {
    name: "Basic",
    accounts: 2,
    interval: "15-min",
    priceWeek: 40,
    priceMonth: 120,
  },
  Pro: {
    name: "Pro",
    accounts: 5,
    interval: "7-min",
    priceWeek: 90,
    priceMonth: 270,
  },
  Elite: {
    name: "Elite",
    accounts: 10,
    interval: "2-min",
    priceWeek: 320,
    priceMonth: 899,
  },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan: string };
}) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  const selectedPlan = allPlans[searchParams.plan];

  if (!selectedPlan) {
    return <div className="text-center text-red-600 p-10">❌ Invalid Plan</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Checkout – {selectedPlan.name} Plan
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-left space-y-4">
        <p>
          <strong>Email:</strong> {user.emailAddresses[0].emailAddress}
        </p>
        <p>
          <strong>Plan:</strong> {selectedPlan.name}
        </p>
        <p>
          <strong>Accounts:</strong> {selectedPlan.accounts}
        </p>
        <p>
          <strong>Interval:</strong> {selectedPlan.interval}
        </p>
        <p>
          <strong>Price (Weekly):</strong> ${selectedPlan.priceWeek}
        </p>
        <p>
          <strong>Price (Monthly):</strong> ${selectedPlan.priceMonth}
        </p>

        <div className="mt-4">
          <p className="text-sm text-gray-600">Choose payment method:</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-yellow-600">
            Pay with Crypto (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}

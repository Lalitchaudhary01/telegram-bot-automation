import { auth, currentUser } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/user";

export default async function UserDashboard() {
  const { userId } = await auth();
  const clerkUser = await currentUser();

  await dbConnect();

  const email = clerkUser?.emailAddresses?.[0]?.emailAddress;
  const role = clerkUser?.publicMetadata?.role || "USER";
  const name = clerkUser?.firstName || "User";

  const existing = await User.findOne({ clerkId: userId });

  if (!existing && email) {
    try {
      await User.create({
        clerkId: userId,
        email,
        role,
      });
      console.log("✅ MongoDB User Created");
    } catch (err) {
      console.error("❌ Error creating user:", err);
    }
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
           {" "}
      <div className="bg-white/10 backdrop-blur-md text-white w-full max-w-xl p-8 rounded-2xl shadow-2xl border border-white/20">
                <h1 className="text-3xl font-bold mb-4">👋 Welcome, {name}!</h1>
        <p className="text-lg mb-2">Your user dashboard is live and active.</p>
        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p>
            <span className="font-semibold">Email:</span> {email || "Not available"}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {typeof role === "string" ? role : String(role)}
          </p>
          <p>
            <span className="font-semibold">User ID:</span> {userId}
          </p>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-semibold">
            Explore Dashboard
          </button>
        </div>
      </div>
    </main>
  );
}

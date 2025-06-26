// components/Navbar.tsx
"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { user } = useUser();

  const handleDashboardRedirect = () => {
    const role = user?.publicMetadata?.role;

    if (role === "ADMIN") router.push("/dashboard/admin");
    else if (role === "RESELLER") router.push("/dashboard/reseller");
    else router.push("/dashboard/user");
  };

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🧠 AdBot
        </Link>

        {/* Nav Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>

          {/* If user is signed out */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </SignedOut>

          {/* If user is signed in */}
          <SignedIn>
            <button
              onClick={handleDashboardRedirect}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
            >
              Dashboard
            </button>

            {/* Clerk's User Button Dropdown */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

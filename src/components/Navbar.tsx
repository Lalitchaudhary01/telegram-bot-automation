"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user } = useUser();
  const router = useRouter();

  const goToDashboard = () => {
    const role = user?.publicMetadata?.role || "user";
    router.push(`/dashboard/${role}`);
  };

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🧠 AdBot
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/pricing">Pricing</Link>

          <SignedOut>
            <Link
              href="/sign-in"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </SignedOut>

          <SignedIn>
            <button
              onClick={goToDashboard}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
            >
              Dashboard
            </button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

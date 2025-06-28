"use client";
import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const params = useSearchParams();
  const role = params.get("role") || "user";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp
        unsafeMetadata={{ role }} // Save to Clerk publicMetadata
        signInUrl="/sign-in"
      />
    </div>
  );
}

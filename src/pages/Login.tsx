import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen py-24 flex justify-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
}

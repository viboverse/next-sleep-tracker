import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Header() {
  const user = await checkUser();

  console.log("Current User:", user);

  return (
    <nav>
      <div className="mx-auto max-w-7xl border-b-2 border-gray-200 px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text font-bold text-transparent sm:text-2xl">
                Sleep Tracker
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:text-purple-600 sm:block sm:px-3 sm:py-2 sm:text-base"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:text-purple-600 sm:block sm:px-3 sm:py-2 sm:text-base"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="hidden rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:text-purple-600 sm:block sm:px-3 sm:py-2 sm:text-base"
            >
              About
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="w-full cursor-pointer rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-3 py-1 font-medium text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-600 sm:w-auto sm:px-4 sm:py-2">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

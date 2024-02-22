import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="fixed top-0 bg-[#191D24] w-full mx-auto z-50">
      <div className="max-w-fit md:max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          <Link to="/" className="text-white hover:text-gray-200 text-xl">
            Addis Living
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 md:mt-0">
          {/* <li>
            <Link
              to="/"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              Offers
            </Link>
          </li> */}
          {/* <li>
            <Link to="/profile" className="hover:underline underline-offset-4">
              Profile
            </Link>
          </li> */}
          {/* <li>
            <SignedIn>
              <Link
                to="/profile"
                className="hover:underline underline-offset-4 mr-4"
              >
                Profile
              </Link>
            </SignedIn>
          </li> */}
          <li>
            <SignedIn>
              <UserButton afterSignOutUrl="/login" />
            </SignedIn>
          </li>
          <li>
            <SignedOut>
              <Link
                to="/login"
                className="hover:underline underline-offset-4 mr-4"
              >
                Sign In
              </Link>
            </SignedOut>
          </li>
          <li>
            <SignedOut>
              <Link
                to="/register"
                className="hover:underline underline-offset-4"
              >
                Sign Up
              </Link>
            </SignedOut>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;

import Link from "next/link";
import Image from "next/image";

const AccessDeniedPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Illustration */}
        <div className="relative w-64 h-64 mx-auto opacity-90">
          <Image
            src="/access-denied.svg" // Replace with your SVG path
            alt="Access Denied Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Access Denied</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            You do not have permission to access this page. Please log in with
            an authorized account.
          </p>
        </div>

        {/* Go to Login Button */}
        <Link
          href="/admin/login"
          className="inline-block px-8 py-3 text-sm font-medium text-white bg-black 
          shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default AccessDeniedPage;

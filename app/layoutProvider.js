"use client";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./footer";
export default function LayoutProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname == "/") {
    return (
      <div className="flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    );
  } else if (pathname == "/login") {
    return <div>{children}</div>;
  } else {
    return (
      <div className="flex flex-col">
        <div className="flex-1">
          <div className="navbar bg-primary">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 text-white"
                onClick={() => router.push("/")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <label className="normal-case text-xl text-white">
                {pathname.substring(1)}
              </label>
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

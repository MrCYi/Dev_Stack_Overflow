import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="fixed z-50 flex-between gap-5 w-full p-6 sm:px-12 background-light900_dark200 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="Dev Flow Logo"
          width={23}
          height={23}
        />
        <p className="max-sm:hidden h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <div>GlobalSearch</div>

      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

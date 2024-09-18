import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="mb-8 flex flex-row items-center gap-x-4 h-full">
            <Link
              href="/"
              className="h-7 w-7 rounded-full bg-orange-600"
            ></Link>
            <h1 className="text-2xl font-semibold tracking-tighter">
              Daniel Hangan
            </h1>
          </div>
        </nav>
      </div>
    </aside>
  );
}

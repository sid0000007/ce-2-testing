import { ThemeToggle } from "@/components/example/theme-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";

const SidebarNew = () => {
  return (
    <div className="drawer drawer-end flex flex-row items-center w-screen   ">
      <Link href="/">
        <img
          className=" cursor-pointer self-start"
          src="./logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="ml-auto mr-6 ">
        <ThemeToggle />
      </div>

      <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content bg-transparent  mr-4 ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn-ghost  bg-transparent"
        >
          <Menu className="dark:text-white text-black hover:scale-125 transition duration-300" />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-transparent text-xl items-start  text-white min-h-full w-80 p-4 mt-36">
          {/* Sidebar content here */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/culture">Culture</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <nav className="absolute top-0 z-10 p-6 flex w-screen justify-evenly">
      <SidebarNew />
    </nav>
  );
};

export default Navbar;

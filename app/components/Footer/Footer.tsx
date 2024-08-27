import Link from "next/link";
import { Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 h-[50vh]">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
        <div className="flex flex-col px-8 md:flex-row justify-between items-center py-20">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <li>
              <Link
                href="/"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/culture"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Culture
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4  mt-6 md:mt-0">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Linkedin />
            </Link>
          </div>
        </div>

        <div className="text-center text-sm py-4 flex flex-col justify-center items-center gap-1">
          <Link href="/">
            <img
              className=" cursor-pointer "
              src="./logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          &copy; CREATOR ENGINE 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;

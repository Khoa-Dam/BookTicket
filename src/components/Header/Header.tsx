import React from "react";
import { Link } from "react-router-dom";
import { PiAirplaneLight } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative bg-gray-100">
        <div className=" max-w-7xl px-18 lg:px-8 container flex flex-wrap items-center justify-between text-[#1c89e3] pt-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start w-2">
            <Link
              className="flex text-sm text-center font-bold leading-relaxed py-2 whitespace-nowrap uppercase font-serif"
              to="/"
            >
              <PiAirplaneLight className="h-7 w-7 mr-2" />  AirFlight
            </Link>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex justify-center items-center flex-col lg:flex-row list-none lg:ml-auto center">
              <li className="nav-item">
                <Link
                  className="px-2 py-1.5 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 border-2 rounded-md border-blue-200 mr-2"
                  to="/Support"
                >
                  Hỗ trợ
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="px-2 py-1.5 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 border-2 rounded-md border-blue-200 "
                  to="/SignUp"
                >
                  <MdAccountCircle className="mr-2 " />
                  Đăng kí
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-2 py-1.5 before:content-['|'] flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 "
                  to="/SignIn"
                >
                  Đăng nhập
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

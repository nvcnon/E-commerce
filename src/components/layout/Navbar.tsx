import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logoNav.jpeg";
import Container from "./Container";
import { useAuthContext } from "../../features/auth/context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeCategory = searchParams.get("category");

  const navItems = [
    { title: "فروشگاه", path: "/store" },
    { title: "مردانه", path: "/store?category=men" },
    { title: "زنانه", path: "/store?category=women" },
    { title: "بچگانه", path: "/store?category=kids" },
    { title: "وبلاگ", path: "/blog" },
  ];

  const { handleLogOut } = useAuthContext();

  return (
    <nav className="gap-3 px-4 py-3 shadow-xl shadow-gray-100 sm:px-6 lg:px-10">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="h-auto w-12 shrink-0 sm:w-14 lg:w-17.5 rounded-2xl ml-3"
              src={logo}
              alt="The Shop Creative"
            />
          </Link>

          <div className="min-w-0 flex-1 overflow-x-auto md:flex-none">
            <ul className="flex w-max items-center rounded-4xl bg-mist-100 text-sm sm:text-base lg:text-xl">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/store"
                    ? location.pathname === "/store" && !activeCategory
                    : item.path === "/blog"
                      ? location.pathname === "/blog"
                      : location.pathname === "/store" &&
                        activeCategory ===
                          new URLSearchParams(item.path.split("?")[1]).get(
                            "category",
                          );

                return (
                  <li
                    key={item.path}
                    className="shrink-0 rounded-4xl px-3 py-2 transition-colors hover:bg-mist-300 sm:px-4 sm:py-3 lg:px-5"
                  >
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`pb-2 border-b-2 transition-colors ${
                        isActive
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:text-black"
                      }`}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex">
            <Link to={"/cart"}>
              <svg
                className="w-8 shrink-0 mr-3 sm:mr-6 sm:w-10 md:w-11"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clipPath="url(#clip0_15_35)">
                    {" "}
                    <rect fill="white"></rect>{" "}
                    <path
                      d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                      stroke="#000000"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <circle
                      cx="10"
                      cy="20"
                      r="1"
                      stroke="#000000"
                      strokeLinejoin="round"
                    ></circle>{" "}
                    <circle
                      cx="17.5"
                      cy="20"
                      r="1"
                      stroke="#000000"
                      strokeLinejoin="round"
                    ></circle>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_15_35">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </Link>

            <button
              onClick={handleLogOut}
              className="shrink-0 rounded-4xl px-3 py-2 text-sm transition-colors hover:bg-mist-300 sm:px-5 sm:py-3 sm:text-base lg:text-xl"
            >
              خروج
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

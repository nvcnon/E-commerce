import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logoNav.jpeg";
import Container from "./Container";
import { useAuthContext } from "../../features/auth/context/AuthContext";
import { useCartContext } from "../../features/cart/context/CartContext";
import { useTheme } from "../../features/theme/context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeCategory = searchParams.get("category");
  const { isLogin, handleLogOut } = useAuthContext();
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  const { cartItem } = useCartContext();

  const totalQty = cartItem.reduce((total, item) => total + item.qty, 0);

  const navItems = [
    { title: "فروشگاه", path: "/store" },
    { title: "مردانه", path: "/store?category=men" },
    { title: "زنانه", path: "/store?category=women" },
    { title: "بچگانه", path: "/store?category=kids" },
    { title: "وبلاگ", path: "/blog" },
  ];

  return (
    <nav className="bg-white text-gray-900 dark:bg-mist-900 dark:text-white gap-3 px-4 py-3 border-b border-mist-200 dark:border-0 shadow-xl shadow-gray-100 sm:px-6 lg:px-10">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="h-auto w-12 shrink-0 sm:w-14 lg:w-17.5 rounded-2xl ml-3"
              src={logo}
              alt="The Shop Creative"
            />
          </Link>

          <div className="bg-white text-gray-900 dark:bg-mist-900 dark:text-white min-w-0 flex-1 overflow-x-auto md:flex-none">
            <ul className="flex w-max items-center rounded-4xl bg-mist-100 dark:bg-mist-800 text-sm sm:text-base lg:text-xl">
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
                    className="shrink-0 rounded-4xl px-3 py-2 transition-colors hover:bg-mist-300 dark:hover:bg-mist-700 sm:px-4 md:px-6 sm:py-3 lg:px-5"
                  >
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`pb-2 border-b-2 transition-colors ${
                        isActive
                          ? "border-black dark:border-white text-black dark:text-white"
                          : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black"
                      }`}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex relative">
            {isLogin ? (
              <Link to={"/cart"} aria-label={`سبد خرید، ${totalQty} محصول`}>
                <svg
                  className="text-gray-900 dark:text-white w-7 mt-1 shrink-0 mr-3 sm:mr-10 sm:w-9 md:mt-2"
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
                      <rect fill="currentColor"></rect>{" "}
                      <path
                        d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <circle
                        cx="10"
                        cy="20"
                        r="1"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      ></circle>{" "}
                      <circle
                        cx="17.5"
                        cy="20"
                        r="1"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      ></circle>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0_15_35">
                        {" "}
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                        ></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>

                {totalQty > 0 && (
                  <span className="absolute -top-1 sm:-top-1 mr-1 sm:mr-8 md:top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white">
                    {totalQty}
                  </span>
                )}
              </Link>
            ) : null}

            {isLogin ? (
              <button
                onClick={handleLogOut}
                className="shrink-0 rounded-4xl px-3 py-2 text-sm transition-colors hover:bg-mist-100 dark:hover:bg-mist-800 sm:px-5 sm:py-3 sm:text-base lg:text-xl"
              >
                خروج
              </button>
            ) : (
              <button
                onClick={handleLogOut}
                className="shrink-0 rounded-4xl px-3 py-2 text-sm transition-colors hover:bg-mist-100 dark:hover:bg-mist-800 sm:px-5 sm:py-3 sm:text-base lg:text-xl"
              >
                ورود
              </button>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "فعال‌کردن حالت روشن"
                  : "فعال‌کردن حال ت تاریک"
              }
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              className="shrink-0 rounded-4xl px-3 py-2 text-sm transition-colors hover:bg-mist-100 dark:hover:bg-mist-800 sm:px-5 sm:py-3 sm:text-base lg:text-xl"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

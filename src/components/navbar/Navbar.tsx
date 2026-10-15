import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useAuthenticateContext } from "../../context/AuthenticateContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { cartQty } = useShoppingCartContext();
  const { handleLogOut } = useAuthenticateContext();

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="bg-[#212529]  flex relative z-50 h-16 text-white shadow min-[840px]:h-18"
    >
      <Container>
        <div className="flex h-full items-center justify-between flex-row-reverse">
          <ul className="hidden flex-row-reverse text-md min-[840px]:flex">
            <li className="px-5 py-5 hover:bg-gray-950">
              <Link
                to="/"
                className={`px-5 py-5 ${
                  location.pathname === "/" ? "border-b-2 border-white" : ""
                }`}
              >
                خانه
              </Link>
            </li>

            <li className="group relative px-5">
              <button type="button" className="flex items-center gap-1 py-5">
                دسته‌بندی‌ها
                <span className="text-xs transition-transform group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div
                style={{ backgroundColor: "#212529" }}
                className="invisible absolute p-3 rounded right-0 top-full z-50 w-48 translate-y-2  py-2 text-right text-white opacity-0 shadow-2xl shadow-gray-700 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Link
                  to="/store?category=Tshirt"
                  className="block px-4 py-3 transition-colors border-b-2 hover:bg-gray-950 hover:text-gray-200"
                >
                  تیشرت
                </Link>

                <Link
                  to="/store?category=Shoes"
                  className="block px-4 py-3 transition-colors border-b-2 hover:bg-gray-950 hover:text-gray-200"
                >
                  کفش
                </Link>

                <Link
                  to="/store?category=Hat"
                  className="block px-4 py-3 transition-colors border-b-2 hover:bg-gray-950 hover:text-gray-200"
                >
                  کلاه
                </Link>
              </div>
            </li>

            <li className="px-4 py-5 hover:bg-gray-950">
              <Link
                to="/store"
                className={`px-4 py-5 ${
                  location.pathname === "/store"
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                همه محصولات
              </Link>
            </li>

            <li className="px-4 py-5 hover:bg-gray-950">
              <Link
                to="/magazine"
                className={`px-4 py-5 ${
                  location.pathname === "/magazine"
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                مجلات
              </Link>
            </li>

            <li className="px-4 py-5 hover:bg-gray-950">
              <a href="https://tracking.post.ir/" className="px-5 py-5">
                پیگیری سفارشات
              </a>
            </li>

            <li className="px-4 py-4">
              <div className="hidden min-[840px]:block">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    if (!search.trim()) return;

                    navigate(
                      `/store?search=${encodeURIComponent(search.trim())}`,
                    );
                  }}
                >
                  <input
                    type="text"
                    value={search}
                    style={{ backgroundColor: "#E9ECEF" }}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="جستجوی محصول..."
                    className="w-64 rounded-lg bg-white px-4 py-2 text-right text-black outline-none"
                  />
                </form>
              </div>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-3xl min-[840px]:hidden px-5 sm:p-0"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <div className="flex items-center text-xl">
            <button
              onClick={handleLogOut}
              className="mx-3 hidden min-[840px]:block"
            >
              خروج از حساب
            </button>

            <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "فعال‌کردن حالت روشن"
                    : "فعال‌کردن حالت تاریک"
                }
                title={theme === "dark" ? "Light mode" : "Dark mode"}
                className="rounded-xl p-2 mx-5 transition-colors hover:bg-gray-700 dark:hover:bg-gray-700"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

            <Link
              className="relative px-6 sm:px-0"
              to="/cart"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0-4m-7 1a1 1 0 1 1 0 1 1 1 0 0 1-1 0m7 0a1 1 0 1 1 0 1 1 1 0 0 1-1 0" />
              </svg>

              {cartQty !== 0 && (
                <span className="absolute bottom-2 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
                  {cartQty}
                </span>
              )}
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-16 w-full bg-[#212529] shadow-lg min-[840px]:hidden">
            <div className="flex flex-col text-right">
              <Link
                to="/"
                onClick={closeMenu}
                className={` border-b border-gray-950 px-6 py-4 ${
                  location.pathname === "/" ? "bg-gray-950 border-b-white" : ""
                }`}
              >
                خانه
              </Link>

              <Link
                to="/store"
                onClick={closeMenu}
                className={`border-b border-gray-950 px-6 py-4 ${
                  location.pathname === "/store"
                    ? "bg-gray-950 border-b-white"
                    : ""
                }`}
              >
                محصولات
              </Link>

              <Link
                to="/magazine"
                onClick={closeMenu}
                className={`border-b border-gray-950 px-6 py-4 ${
                  location.pathname === "/magazine"
                    ? "bg-gray-950 border-b-white"
                    : ""
                }`}
              >
                مجلات
              </Link>

              <a
                href="https://tracking.post.ir/"
                onClick={closeMenu}
                className="border-b border-gray-950 px-6 py-4 transition-colors"
              >
                پیگیری سفارشات
              </a>

              <button
                onClick={() => {
                  handleLogOut();
                  closeMenu();
                }}
                className="hover:bg-gray-950 px-6 py-4 text-right"
              >
                خروج از حساب
              </button>

            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;

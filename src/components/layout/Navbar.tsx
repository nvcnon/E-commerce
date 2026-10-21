import logo from "../../assets/images/logo/logoNav.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-3 px-4 py-3 shadow-xl shadow-gray-100 sm:px-6 lg:px-10">
      <img
        className="h-auto w-12 shrink-0 sm:w-14 lg:w-17.5"
        src={logo}
        alt="The Shop Creative"
      />

      <div className="min-w-0 flex-1 overflow-x-auto md:flex-none">
        <ul className="flex w-max items-center rounded-4xl bg-mist-100 text-sm sm:text-base lg:text-xl">
          {[
            "فروشگاه",
            "مردانه",
            "زنانه",
            "بچگانه",
            "وبلاگ",
          ].map((item) => (
            <li
              key={item}
              className="shrink-0 rounded-4xl px-3 py-2 transition-colors hover:bg-mist-300 sm:px-4 sm:py-3 lg:px-5"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button className="shrink-0 rounded-4xl px-3 py-2 text-sm transition-colors hover:bg-mist-300 sm:px-5 sm:py-3 sm:text-base lg:text-xl">
        خروج
      </button>
    </nav>
  );
};

export default Navbar;
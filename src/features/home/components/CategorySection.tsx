import { Link } from "react-router-dom";
import menImage from "../../../assets/images/categories/T32368-4.webp";
import womenImage from "../../../assets/images/categories/A410056-4-833x1000.webp";
import kidsImage from "../../../assets/images/categories/H55014-12-833x1000.webp";

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10">
      <Link
        to="/store?category=men"
        className="group relative h-70 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-140"
      >
        <img
          className="dark:opacity-70 dark:group-hover:opacity-40 h-full w-full rounded-xl object-cover opacity-20 transition-opacity duration-100 group-hover:opacity-100"
          src={menImage}
          alt="men"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 sm:text-4xl lg:text-5xl hover:top-10">
          مردانه
        </h1>
      </Link>
      <Link
        to="/store?category=women"
        className="group relative h-70 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-140"
      >
        <img
          className="dark:opacity-70 dark:group-hover:opacity-40 h-full w-full rounded-xl object-cover opacity-20 transition-opacity duration-100 group-hover:opacity-100"
          src={womenImage}
          alt="women"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 sm:text-4xl lg:text-5xl hover:top-10">
          زنانه
        </h1>
      </Link>
      <Link
        to="/store?category=kids"
        className="group relative h-70 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-140"
      >
        <img
          className="dark:opacity-70 dark:group-hover:opacity-40 h-full w-full rounded-xl object-cover opacity-20 transition-opacity duration-100 group-hover:opacity-100"
          src={kidsImage}
          alt="kids"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 sm:text-4xl lg:text-5xl hover:top-10">
          بچگانه
        </h1>
      </Link>
    </div>
  );
};

export default CategorySection;

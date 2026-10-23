import { Link } from "react-router-dom";
import menImage from "../../../assets/images/categories/اسلاید-های-وب-سایت-01-1-833x1232.webp";
import womenImage from "../../../assets/images/categories/اسلاید-های-وب-سایت-02-1-833x1232.webp";
import kidsImage from "../../../assets/images/categories/اسلاید-های-وب-سایت-04-4-833x1232.webp";

const CategorySection = () => {
  //   const categories = [
  //     {
  //       title: "Men",
  //       path: "/store?category=men",
  //       image: menImage,
  //     },
  //     {
  //       title: "Women",
  //       path: "/store?category=women",
  //       image: womenImage,
  //     },
  //     {
  //       title: "Kids",
  //       path: "/store?category=kids",
  //       image: kidsImage,
  //     },
  //   ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10">
      <Link to="/store?category=men">
        <div className="relative flex justify-center items-center h-100 w-full rounded-2xl lg:h-110">
          <h1 className="absolute bottom-2 text-2xl md:text-3xl text-green-950 bg-white py-2 px-5 rounded">
            مردانه
          </h1>
          <img
            className="h-100 lg:h-110 w-full rounded-2xl lg:hover:h-115"
            src={menImage}
            alt="men"
          />
        </div>
      </Link>
      <Link to="/store?category=women">
        <div className="relative flex justify-center items-center h-100 w-full rounded-2xl lg:h-110">
          <h1 className="absolute bottom-2 text-2xl md:text-3xl text-green-950 bg-white py-2 px-5 rounded">
            زنانه
          </h1>
          <img
            className="h-100 lg:h-110 w-full rounded-2xl lg:hover:h-115"
            src={womenImage}
            alt="women"
          />
        </div>
      </Link>
      <Link to="/store?category=kids">
        <div className="relative flex justify-center items-center h-100 w-full rounded-2xl lg:h-110">
          <h1 className="absolute bottom-2  text-2xl md:text-3xl text-green-950 bg-white py-2 px-5 rounded">
            بچگانه
          </h1>
          <img
            className="h-100 lg:h-110 w-full rounded-2xl lg:hover:h-115"
            src={kidsImage}
            alt="kids"
          />
        </div>
      </Link>
    </div>
  );
};

export default CategorySection;

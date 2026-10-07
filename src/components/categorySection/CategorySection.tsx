import { Link } from "react-router-dom";
import tshirts from "../../assets/IMG_20261002_010446_893.jpg";
import shoes from "../../assets/Air_Jordan_1_Retro_High_OG_Palomino.webp";
import hats from "../../assets/thumbnails.jpeg";

const CategorySection = () => {
  return (
    <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
      <Link
        to="/store?category=Tshirt"
        className="group relative h-70 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-100"
      >
        <img
          className="h-full w-full rounded-xl object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-100"
          src={tshirts}
          alt="Tshirts"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 sm:text-4xl lg:text-5xl">
          Tshirts
        </h1>
      </Link>

      <Link
        to="/store?category=Shoes"
        className="group relative h-70 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-100"
      >
        <img
          className="h-full w-full rounded-xl object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-100"
          src={shoes}
          alt="Shoes"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 sm:text-4xl lg:text-5xl">
          Shoes
        </h1>
      </Link>

      <Link
        to="/store?category=Hat"
        className="group relative h-70 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-100"
      >
        <img
          className="h-full w-full rounded-xl object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-100"
          src={hats}
          alt="Hats"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 sm:text-4xl lg:text-5xl">
          Hats
        </h1>
      </Link>
    </div>
  );
};

export default CategorySection;

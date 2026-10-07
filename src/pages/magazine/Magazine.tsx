import { useEffect, useState } from "react";
import type { IMagazine } from "../../types/server";
import { getMagazine } from "../../services/api";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Magazine = () => {
  const [magazine, setMagazine] = useState<IMagazine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getMagazine()
      .then((result) => {
        setMagazine(result);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        دریافت مقالات با خطا مواجه شد.
      </div>
    );
  }

  return (
    <Container>
      {/* دو مقاله اول */}
      <div className="grid grid-cols-1 gap-4 p-4 text-right sm:grid-cols-2 lg:gap-5 lg:p-5">
        {magazine
          .filter((item) => [1, 2].includes(parseInt(item.id)))
          .map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg p-4 shadow"
            >
              <Link to={`/magazine/${item.id}`} className="block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-3 h-auto w-full rounded-md object-cover"
                />

                <h1 className="py-2 text-lg font-semibold sm:text-xl">
                  {item.title}
                </h1>

                <span className="block py-2 text-sm text-gray-500">
                  {item.date}
                </span>

                <p className="line-clamp-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </Link>
            </div>
          ))}
      </div>

      {/* سه مقاله بعدی */}
      <div className="grid grid-cols-1 gap-4 p-4 text-right sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:p-5">
        {magazine
          .filter((item) => [3, 4, 5].includes(parseInt(item.id)))
          .map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg p-4 shadow"
            >
              <Link to={`/magazine/${item.id}`} className="block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-3 h-auto w-full rounded-md object-cover"
                />

                <h1 className="py-2 text-lg font-semibold">
                  {item.title}
                </h1>

                <span className="block py-2 text-sm text-gray-500">
                  {item.date}
                </span>

                <p className="line-clamp-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Magazine;
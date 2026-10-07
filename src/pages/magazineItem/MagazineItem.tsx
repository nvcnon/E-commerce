import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import type { IMagazine } from "../../types/server";
import { getMagazineItem } from "../../services/api";

const MagazineItem = () => {
  const params = useParams<{ id: string }>();

  const [magazine, setMagazine] = useState<IMagazine>();

  useEffect(() => {
    if (!params.id) return;

    getMagazineItem(params.id).then((data) => {
      setMagazine(data);
    });
  }, [params.id]);

  return (
    <Container>
      <article className="px-4 py-5 text-right sm:px-6 lg:px-8">
        {/* Image */}
        <img
          className="mx-auto w-full max-w-3xl rounded-lg object-cover"
          src={magazine?.image}
          alt={magazine?.title}
        />

        {/* Content */}
        <div className="mx-auto mt-6 max-w-3xl">
          <h1 className="py-3 text-xl font-bold leading-8 sm:text-2xl lg:text-3xl">
            {magazine?.title}
          </h1>

          <span className="block py-2 text-sm text-gray-500 sm:text-base">
            {magazine?.date}
          </span>

          <p className="py-3 text-sm font-medium leading-7 text-gray-700 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            {magazine?.description}
          </p>
        </div>
      </article>
    </Container>
  );
};

export default MagazineItem;
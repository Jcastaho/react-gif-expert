import { GifItem } from "./GifItem"; // Asegúrate de que la ruta sea correcta
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image, index) => (
          <GifItem
            key={image.id}
            {...image}
            style={{ "--card-index": index }}
          /> // Pasar index para la animación escalonada
        ))}
      </div>
    </>
  );
};

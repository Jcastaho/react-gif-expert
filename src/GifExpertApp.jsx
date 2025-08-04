import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //setCategories(categories.concat("Nueva Categoria1"));

    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifs, handleSearch, previousTerms, handleTermClicked } = useGifs();

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca un gif..." onQuery={handleSearch} />
      {/* Busquedas previas */}

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};

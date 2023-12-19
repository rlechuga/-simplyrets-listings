import { useEffect, useState } from 'react';

import heartFill from '@assets/heart-fill.svg';
import heartStroke from '@assets/heart-stroke.svg';

const SAVED_FAVORITES = 'savedFavorites';

const FavoriteIcon = ({listing}) => {
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem(SAVED_FAVORITES)) || [];
    setIsFavorite(savedFavorites.includes(listing.mlsId));
  }, [listing.mlsId]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    const savedFavorites =
      JSON.parse(localStorage.getItem(SAVED_FAVORITES)) || [];
    const updatedFavorites = isFavorite
      ? savedFavorites.filter((property) => property !== listing?.mlsId)
      : [...savedFavorites, listing?.mlsId];

    localStorage.setItem(SAVED_FAVORITES, JSON.stringify(updatedFavorites));
  };

  const renderFavoriteIcon = () => {
    const selectedIcon = isFavorite ? heartFill : heartStroke;
    const imgAlt = isFavorite ? 'favorite icon' : 'not favorite icon';
    const buttonAlt = isFavorite ? 'Remove from favorites' : 'Add to favorites';

    return (
      <button
        className="absolute top-2 right-2 heart-icon"
        onClick={handleFavoriteClick}
        aria-label={buttonAlt}
      >
        <img className="w-10 h-9" src={selectedIcon} alt={imgAlt} />
      </button>
    );
  };

  return <div>{renderFavoriteIcon()}</div>;
};

export default FavoriteIcon;

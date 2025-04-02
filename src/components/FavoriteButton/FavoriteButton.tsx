import FullHeartIcon from '../../assets/FullHeartIcon';
import { useFavoriteStore } from '../../stores/favoriteStore';

type FavoriteButtonProps = {
  id: number;
  NotFavoriteIcon: React.ComponentType;
};

function FavoriteButton({ id, NotFavoriteIcon }: FavoriteButtonProps) {
  const isFavorite = useFavoriteStore((state) => state.isFavorite(id));
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <button
      type="button"
      className="relative z-10 w-10 h-10 group/fav cursor-pointer"
      onClick={handleClick}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? <FullHeartIcon /> : <NotFavoriteIcon />}

      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/fav:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </span>
    </button>
  );
}

export default FavoriteButton;

import FullHeartIcon from '../../assets/FullHeartIcon';
import { useFavoriteStore } from '../../states/favoriteState';

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
    <div className="w-10 h-10">
      <button
        type="button"
        className="w-full h-full cursor-pointer"
        onClick={handleClick}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? <FullHeartIcon /> : <NotFavoriteIcon />}
      </button>
    </div>
  );
}

export default FavoriteButton;

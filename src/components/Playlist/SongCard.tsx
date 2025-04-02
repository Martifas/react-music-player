import { audioController } from '../../services/audioController';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import BlueHollowHeartIcon from '../../assets/BlueHollowHeartIcon';
import { useFavoriteStore } from '../../states/favoriteState';

type SongCardProps = {
  id: number;
  position: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  picture: string;
};

function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function SongCard({
  position,
  title,
  artist,
  album,
  duration,
  id,
  picture,
}: SongCardProps) {
  const isFavorite = useFavoriteStore((state) => state.isFavorite(id));

  const handleClick = () => {
    audioController.loadAndPlay(position - 1);
  };

  return (
    <div
      onClick={handleClick}
      className="group flex cursor-pointer items-center py-2 px-2 border-1 border-blue-300 rounded bg-white/70 hover:bg-blue-100 hover:shadow-md transition"
    >
      <div className="flex-1 text-gray-700 max-w-20">{position}</div>

      <div className="flex-2 h-16 mr-2 max-w-32">
        <img src={picture} className="w-full h-full object-cover rounded" />
      </div>

      <div className="flex-6">
        <div className="font-medium text-black">{title}</div>
        <div className="text-sm text-gray-600">{artist}</div>
      </div>

      <div className="flex-3 text-gray-700 mr-1">{album}</div>

      <div className="flex-2 flex items-center justify-end gap-1 text-gray-700">
        <div
          className={`${isFavorite ? 'visible' : 'invisible group-hover:visible'}`}
        >
          <FavoriteButton id={id} NotFavoriteIcon={BlueHollowHeartIcon} />
        </div>
        {formatDuration(duration)}
      </div>
    </div>
  );
}

export default SongCard;

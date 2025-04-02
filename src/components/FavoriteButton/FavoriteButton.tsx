import HollowHeartIcon from '../../assets/HollowHeartIcon';
import FullHeartIcon from '../../assets/FullHeartIcon';

function FavoriteButton() {
  return (
    <>
      <div className="w-10 h-10">
        <button className="w-full h-full cursor-pointer">
          <FullHeartIcon />
        </button>
      </div>
    </>
  );
}
export default FavoriteButton;

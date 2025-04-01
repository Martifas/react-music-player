type SongCardProps = {
  title: string;
  artist: string;
};

function SongCard({ title, artist }: SongCardProps) {
  return (
    <div className="p-4 bg-white/70 hover:bg-white/90 transition border-1 border-blue-300">
      <div className="font-bold text-black">{title}</div>
      <div className="text-slate-800">{artist}</div>
    </div>
  );
}

export default SongCard;

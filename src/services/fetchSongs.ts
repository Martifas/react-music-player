const fetchSongs = async () => {
  const res = await fetch('/tracks.json');
  if (!res.ok) throw new Error('Failed to fetch tracks');
  return await res.json();
};

export default fetchSongs;

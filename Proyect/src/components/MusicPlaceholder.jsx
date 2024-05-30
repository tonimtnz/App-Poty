import "../styles/recommendedMusicPlaceholder.css";

export function MusicPlaceholder() {
  return (
    <div className="placeholder-div">
      <img
        className="placeholder-img-recommendedMusic"
        src="./src/assets/MusicPlaceholder.jpg"
      />
      <h3>Elige una canción</h3>
    </div>
  );
}

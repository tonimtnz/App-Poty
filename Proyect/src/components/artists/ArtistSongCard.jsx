export function ArtistSongCard({ songName, songId, songReps, songImg, songTime }) {

    const songTimeMins = songTime / 60;
  
    return (
    <a className="artist-song-card">
      <img src={songImg} />
      <div className="artist-song-info">
        <h3>{songName}</h3>
        <h5>{songReps} Reproducciones</h5>
        <h5>{songTimeMins.toFixed()} Minutos</h5>
      </div>
      <button>
        <svg
          width="12"
          height="18"
          viewBox="0 0 16 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0547 12.2029C15.0553 12.5216 14.9957 12.8351 14.8818 13.1129C14.7679 13.3906 14.6035 13.6233 14.4046 13.7881L2.08029 24.1296C1.8725 24.3041 1.63452 24.3994 1.39092 24.4056C1.14731 24.4117 0.906922 24.3286 0.69457 24.1648C0.48424 24.0035 0.309029 23.7682 0.186955 23.4832C0.0648819 23.1982 0.00035144 22.8738 0 22.5433V1.86262C0.00035144 1.53208 0.0648819 1.20764 0.186955 0.922651C0.309029 0.637664 0.48424 0.402421 0.69457 0.241113C0.906922 0.0772593 1.14731 -0.00586596 1.39092 0.000321891C1.63452 0.00650975 1.8725 0.101786 2.08029 0.276312L14.4046 10.6178C14.6035 10.7826 14.7679 11.0152 14.8818 11.293C14.9957 11.5708 15.0553 11.8842 15.0547 12.2029Z"
            fill="#F8F8F8"
          />
        </svg>
      </button>
    </a>
  );
}

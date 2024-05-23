export function MusicPlaceholder() {
  return (
    <div
      style={{
        backgroundColor: "#727272",
        color: "#ffffff",
        fontFamily: "Poppins",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem 0",
        borderRadius: "20px",
        height: "352px",
      }}
    >
      <img
        style={{ borderRadius: "100%", width: "140px" }}
        src="./src/assets/MusicPlaceholder.jpg"
      />
      <h3>Elige una canción</h3>
    </div>
  );
}

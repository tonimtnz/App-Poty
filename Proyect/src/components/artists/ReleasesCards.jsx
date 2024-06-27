export function ReleasesCard(release) {
  return (
    <>
      {release?.releases?.map((songArtInfo) => {
        return (
          <li key={songArtInfo.name}>
            <div>
              <h3>{songArtInfo.name}</h3>
              <p>{songArtInfo.artist}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}

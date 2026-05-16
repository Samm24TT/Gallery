export default function Gallery({ handleSignOut }) {
  return (
    <>
      <h1>Gallery</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}

function Loader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img
        className="h-24 animate-spin lg:h-40"
        src="../logo.png"
        alt="uby logo"
      />
      <h1 className="mt-4 text-3xl font-black italic md:text-4xl">
        Loading...
      </h1>
    </div>
  );
}

export default Loader;

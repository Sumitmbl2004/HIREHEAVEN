const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4">
      <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm mb-4">
        No. 1 Job Hunt Website
      </span>

      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
        Search, Apply & Get Your{" "}
        <span className="text-primary">Dream Jobs</span>
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl">
        Find your dream job from thousands of listings across top companies.
      </p>

      {/* Search */}
      <div className="mt-8 flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="flex-1 border border-gray-300 px-4 py-3 rounded-l-md outline-none"
        />
        <button className="bg-primary text-white px-6 rounded-r-md">
          Search
        </button>
      </div>
    </section>
  );
};

export default Home;

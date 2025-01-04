import banner from "../../assets/hero-banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl mb-5 font-inter md:text-7xl font-bold text-white leading-tight sm:leading-snug md:leading-snug">
            Find & Hire Experts for any Job
          </h1>
          <p className="lg:w-4/5 lg:mx-auto font-inter mb-8">
            Find Jobs, Employment & Career Opportunities. Some of the companies
            we've helped recruit excellent applicants over the years.
          </p>

          <div className="h-24 p-4 bg-white flex rounded-lg mb-5">
            <label className="w-1/3 bg-gray-50 flex items-center px-4 border-r-2 border-gray-300">
              <input
                type="text"
                className="w-full bg-gray-50 font-inter text-sm text-gray-600 placeholder:text-gray-600 focus:outline-none"
                placeholder="Search your keywords"
              />
            </label>

            <select className="h-full select bg-gray-50 font-inter text-sm font-normal text-gray-600 rounded-none w-1/3 focus:outline-none focus:border-none">
              <option disabled selected>
                Location
              </option>
              <option>Bangladesh</option>
              <option>America</option>
            </select>

            <button className="w-1/3 h-full btn rounded-none bg-[#047857] text-white font-normal font-inter text-base border-none hover:bg-[#01543a]">
              Search
            </button>
          </div>
          <p className="text-center font-inter">
            <span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior
            Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

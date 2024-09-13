import WorldMap from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <>
      <div className="container my-36 mx-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {/* text-content section */}
          <div className="space-y-8">
            <h1
              className="text-4xl font-bold text-dark font-serif"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Where to buy our products?
            </h1>
            <div
              className="flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full lg:w-[120px]"
              />
            </div>
            <button
              className="primary-btn"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Search
            </button>
          </div>

          {/* Map section */}
          <div className="col-span-2" data-aos="fade">
            <img
              src={WorldMap}
              alt="World Map"
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;

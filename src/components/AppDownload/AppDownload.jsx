import BannerImg from "../../assets/website/banner.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const bannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const AppDownload = () => {
  return (
    <>
      <div className="container my-14">
        <div
          style={bannerStyle}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto">
              <h1
                className="text-2xl text-center sm:text-4xl font-semibold"
                data-aos="fade-up"
              >
                Download the app
              </h1>
              <p
                className="text-center sm:px-20"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique mangam harum accusantium odit?
              </p>

              {/* images links */}
              <div
                className="flex justify-center items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="PlayStore Image"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="AppStore Image"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;

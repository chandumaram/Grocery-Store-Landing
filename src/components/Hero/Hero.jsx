import { useState } from "react";
import OrangeImg from "../../assets/orangebg.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] w-full bg-gradient-to-r from-primary to-secondary md:rounded-lg shadow-md">
        <div className="container">
          {/* Navbar Section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/* Hero Section */}
          <div className="min-h-[650px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {/* Text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-3xl pl-6 md:pl-14" data-aos="fade-up">
                01______
              </h1>
              <h1
                className="text-5xl font-bold uppercase text-shadow"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                A Healthy Fruit
              </h1>
              <p className="text-sm" data-aos="fade-up" data-aos-delay="500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                excepturi molestiae rerum numquam hic.
              </p>
              <button
                className="secondary-btn"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="0"
              >
                Shop Now
              </button>
            </div>

            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src={OrangeImg}
                alt="Orange Image"
                className="relative z-10 w-[400px] img-shadow"
              />
            </div>

            {/* Blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* Background large image */}
        <h1
          className="large-text"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1800"
        >
          Orange
        </h1>

        {/* Sidebar section */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                {/* Line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                {/* Line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;

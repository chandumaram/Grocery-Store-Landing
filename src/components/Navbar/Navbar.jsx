import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div className="container" data-aos="fade">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <h1 className="text-4xl font-bold uppercase">
            Orange <span className="font-normal text-2xl">Mint</span>
          </h1>

          {/* Navlinks section */}
          <ul className="hidden lg:flex space-x-4 text-xl">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Where to find</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Hamburger menu */}
          <div onClick={() => setSidebar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

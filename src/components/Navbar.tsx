import { SearchSVG, MoonSVG, ProfileSVG } from "assets/svgs";

export const Navbar = () => {
  return (
    <nav className="w-full h-14 hidden bg-white p-4 justify-between items-center lg:flex fixed z-10 ">
      <div>
        <p className="text-xl text-primary font-black">Platzi Travel</p>
      </div>
      <div className="flex space-x-8">
        <a className="font-bold text-primary" href="#home">
          Home
        </a>
        <a className="font-bold text-primary" href="#recomended">
          Recomended
        </a>
        <a className="font-bold text-primary" href="#rents">
          rents
        </a>
        <a className="font-bold text-primary" href="#FAQS">
          FAQS
        </a>
        <a className="font-bold text-primary" href="#about_us">
          About us
        </a>
      </div>
      <div className="flex space-x-4">
        <SearchSVG />
        <MoonSVG />
        <ProfileSVG />
      </div>
    </nav>
  );
};

import { SearchSVG, MoonSVG, ProfileSVG } from "assets/svgs";

export const Navbar = ({ darkMode }: { darkMode: () => void }) => {
  return (
    <nav className="w-full h-14 hidden bg-white p-4 justify-between items-center lg:flex fixed z-10 dark:bg-gray-800">
      <div>
        <p className="text-xl text-primary font-black dark:text-white">
          Platzi Travel
        </p>
      </div>
      <div className="flex space-x-8 ">
        <a className="font-bold text-primary dark:text-white" href="#home">
          Home
        </a>
        <a
          className="font-bold text-primary dark:text-white"
          href="#recomended"
        >
          Recomended
        </a>
        <a className="font-bold text-primary dark:text-white" href="#rents">
          rents
        </a>
        <a className="font-bold text-primary dark:text-white" href="#FAQS">
          FAQS
        </a>
        <a className="font-bold text-primary dark:text-white" href="#about_us">
          About us
        </a>
      </div>
      <div className="flex space-x-4">
        <SearchSVG />
        <button onClick={darkMode}>
          <MoonSVG />
        </button>
        <ProfileSVG />
      </div>
    </nav>
  );
};

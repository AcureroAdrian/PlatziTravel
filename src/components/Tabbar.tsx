import { HomeSVG, LikeSVG, MoonSVG, ProfileSVG, SearchSVG } from "assets/svgs";

export const Tabbar = ({ darkMode }: { darkMode: () => void }) => {
  return (
    <div
      className="z-10 w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-10 justify-center items-center lg:hidden dark:bg-gray-800"
      id="tab_bar"
    >
      <a href="#home">
        <HomeSVG />
      </a>
      <a href="#rents">
        <SearchSVG />
      </a>
      <a href="#recomended">
        <LikeSVG />
      </a>
      <button onClick={darkMode}>
        <MoonSVG />
      </button>
      <a href="#">
        <ProfileSVG />
      </a>
    </div>
  );
};

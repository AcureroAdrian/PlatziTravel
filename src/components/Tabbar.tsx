import { HomeSVG, LikeSVG, MoonSVG, ProfileSVG, SearchSVG } from "assets/svgs"

export const Tabbar = () => {
  return (
    <div className="z-10 w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-10 justify-center items-center lg:hidden" id="tab_bar">
      <a href="#home">
        <HomeSVG />
      </a>
      <a href="#rentas_destacadas">
        <SearchSVG />
      </a>
      <a href="#recomendados">
        <LikeSVG />
      </a>
      <button>
         <MoonSVG />
      </button>
      <a href="#">
        <ProfileSVG />
      </a>
    </div>
  )
}

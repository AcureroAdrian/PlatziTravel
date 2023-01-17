export const Home = () => {
  return (
    <div id='home'>
      <div className='w-full h-3/4'>
        <div className='absolute flex flex-col items-center w-full h-full py-4 space-y-96 lg:space-y-0 lg:items-start lg:pt-16 xl:pt-32 2xl:pl-24 2xl:pt-32'>
          <input className='w-48 p-3 transition-all duration-300 rounded-full shadow-sm outline-none focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden' placeholder='San Francisco' type='search' name=' id=' />
          <div className="hidden h-auto pb-6 lg:w-[36rem] lg:flex">
            <p className="ml-16 text-4xl font-bold text-primary">Encuentra más ubicaciones como esta</p>
          </div>
          <button className='w-48 p-4 text-lg font-semibold transition-all duration-500 ease-in-out transform bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white hover:translate-y-1 hover:scale-110 lg:ml-16'>
            Explorar
          </button>
        </div>
        <div className='w-full h-full lg:h-[65vh] lg:bg-sanFranciscoDesktop lg:bg-center lg:bg-cover xl:h-[450px] 2xl:h-[58vh]'>
          <img className="lg:hidden" src='img/sanFrancisco.jpg' alt='' />
        </div>
      </div>
    </div>
  );
};

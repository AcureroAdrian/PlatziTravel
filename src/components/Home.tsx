export const Home = () => {
  return (
    <div id='home'>
      <div className='w-full h-3/4'>
        <div className='absolute flex flex-col items-center w-full h-full py-4 space-y-96'>
          <input className='w-48 p-3 transition-all duration-300 rounded-full shadow-sm outline-none focus-within:shadow-sm focus:ring-2 focus:w-11/12' placeholder='San Francisco' type='search' name=' id=' />
          <button className='w-48 p-4 text-lg font-semibold transition-all duration-500 ease-in-out transform bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white hover:translate-y-1 hover:scale-110'>
            Explorar
          </button>
        </div>
        <div className='w-full h-full'>
          <img src='img/sanFrancisco.jpg' alt='' />
        </div>
      </div>
    </div>
  );
};

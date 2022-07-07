export default function SlideInit() {
  return (
    <div className="bg-slide-img bg-cover h-[700px] relative flex items-center content-center">
      <div className="container mx-auto relative h-full">  
      <div className="absolute right-0 bottom-[-70px] max-w-full z-10 overflow-x-hidden">
        <img src="/images/mappa-altera.svg" className="filter-img" />
      </div>
        <div className="container mx-auto h-full z-[1]">
          <div className="flex h-full w-full justify-center items-center">
            <div className="w-full z-20 h-full flex flex-col items-start justify-center	content-center">
              <h1 className="text-white mb-5 text-[40px] md:text-[70px]">Generiamo valore e consapevolezza</h1>
              <p className="text-white mb-5">
                Professionisti dedicati allo sviluppo delle imprese e del territorio.
              </p>
              <button className="button btn-light">Contattaci</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

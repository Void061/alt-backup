import Link from "next/link";
import MappaGolfo from "../mappaGolfo/mappaGolfo";


export default function SlideInit() {
  return (
    <div className="bg-slide-img md:min-h-auto bg-cover h-full relative flex flex-col items-end content-center justify-end md:justify-start">
      <div className="hidden md:flex w-full h-auto max-w-full z-10 overflow-x-hidden">
        <MappaGolfo style={{ minWidth: "100vw" }} />
      </div>
      <div className="container md:absolute max-w-full flex z-10 mx-auto  h-full">
        <div className="container mx-auto h-full z-[1]">
          <div className="flex h-full w-full justify-center items-center">
            <div className="w-full z-20 h-full flex pb-10 flex-col items-center pt-[100px] justify-start md:justify-end content-center">
              <h1 className="text-white text-center leading-[35px] md:leading-[50px] mb-5 text-[30px] md:text-[45px]">Generiamo <br /> valore e consapevolezza</h1>
              <p className="text-white text-center mb-5">
                Professionisti dedicati allo sviluppo delle imprese e del territorio.
              </p>
              <Link href="#contact">
                <button className="button btn-light">Contattaci</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

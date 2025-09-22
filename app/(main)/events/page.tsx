import Navigation from "@/app/components/Navigation";
import Image from "next/image";

import divider from "../../../public/divider.png";
import haldi from "../../../public/haldi.png";
import mehendi from "../../../public/mehandi.png";
import sangeet from "../../../public/sangeet.png";

// Day 1
// 5th March

// Mehendi
// Sangeet followed by After Party

// Day 2
// 6th March

// Haldi
// Baraat
// Jaimala
// Pheras
// Reception & After Party

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#bba582]/80 relative overflow-hidden">
      <Navigation />
      <div className="pt-[12%] flex justify-center">
        <div className="w-[840px] pt-10 flex flex-col  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center text-5xl">
            <h1 className="font-english text-white">Ria &amp; Vivek</h1>
            <p></p>
          </div>
          {/* <Image src={divider} height={10} width={100} alt="Divider" /> */}
          <h2></h2>
          <div className="h-80 w-full mt-4 flex items-center justify-evenly">
            <Image height={180} width={180} src={mehendi} alt="mehendi" />
            <div>
              <p className="font-alice text-2xl text-center">
                MEHENDI CEREMONY
              </p>
            </div>
          </div>
          <div className="h-80 w-full mt-4 flex items-center justify-evenly">
            <div>
              <p className="font-alice text-2xl text-center">
                SANGEET CEREMONY
              </p>
            </div>
            <Image height={180} width={180} src={sangeet} alt="sangeet" />
          </div>
          {/* <div className="h-52 w-full mt-4 flex items-center justify-evenly">
            <Image height={200} width={200} src={mehendi} alt="mehendi" />
            <div>
              <p className="font-alice text-5xl text-center">Mehendi</p>
              <h2 className="font-english text-4xl text-center">5th March</h2>
            </div>
          </div>
          <div className="h-52 w-full mt-4 flex items-center justify-evenly">
            <Image height={200} width={200} src={mehendi} alt="mehendi" />
            <div>
              <p className="font-alice text-5xl text-center">Mehendi</p>
              <h2 className="font-english text-4xl text-center">5th March</h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default EventsPage;

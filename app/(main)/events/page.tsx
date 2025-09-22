import Navigation from "@/app/components/Navigation";
import Image from "next/image";

import divider from "../../../public/divider.png";
import haldi from "../../../public/haldi.png";
import mehendi from "../../../public/mehandi.png";
import sangeet from "../../../public/sangeet.png";
import baraat from "../../../public/baarat.png";
import jaimala from "../../../public/jaimala.png";
import pheras from "../../../public/pheras.png";
import reception from "../../../public/reception.png";
import party from "../../../public/after party.png";

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
          </div>

          {/* <Image
            src={divider}
            alt="Divider"
            className="h-2 w-full object-cover"
          />
          
          <Image
            src={divider}
            alt="Divider"
            className="h-2 w-full object-cover"
          /> */}

          <section className="my-4">
            <h2 className="text-center font-english text-5xl rounded-b-2xl py-2">
              5 <sup>th</sup> March
            </h2>

            <div className="h-44 w-full  flex items-center justify-evenly">
              <Image height={140} width={140} src={mehendi} alt="mehendi" />
              <p className="font-alice text-2xl text-center font-bold bg-gradient-to-r from-[#6e7f3e]  bg-clip-text text-transparent">
                MEHENDI CEREMONY
              </p>
            </div>
            <div className="h-44 w-full  flex items-center justify-evenly">
              <p className="font-alice text-2xl text-center">
                SANGEET CEREMONY
              </p>
              <Image height={140} width={140} src={sangeet} alt="sangeet" />
            </div>
          </section>

          <section>
            <h2 className="text-center font-english text-5xl rounded-b-2xl py-2">
              6<sup>th</sup> March
            </h2>

            <div className="h-40 w-full mt-4 flex items-center justify-evenly">
              <Image height={140} width={140} src={haldi} alt="haldi" />
              <p className="font-alice text-2xl text-center">HALDI CEREMONY</p>
            </div>
            <div className="h-40 w-full mt-4 flex items-center justify-evenly">
              <p className="font-alice text-2xl text-center">BARAAT CEREMONY</p>
              <Image height={140} width={140} src={baraat} alt="baraat" />
            </div>
            <div className="h-40 w-full mt-4 flex items-center justify-evenly">
              <Image height={140} width={140} src={jaimala} alt="jaimala" />
              <p className="font-alice text-2xl text-center">
                JAIMALA CEREMONY
              </p>
            </div>
            <div className="h-40 w-full mt-4 flex items-center justify-evenly">
              <p className="font-alice text-2xl text-center">PHERAS CEREMONY</p>
              <Image height={140} width={140} src={pheras} alt="pheras" />
            </div>
            <div className="h-40 w-full mt-4 flex items-center justify-evenly">
              <Image height={140} width={140} src={reception} alt="reception" />
              <p className="font-alice text-2xl text-center">
                RECEPTION & AFTER PARTY
              </p>
              <Image height={140} width={140} src={party} alt="party" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default EventsPage;

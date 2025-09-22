import Navigation from "@/app/components/Navigation";
import Image from "next/image";

import haldi from "../../../public/haldi.png";
import mehendi from "../../../public/mehandi.png";
import sangeet from "../../../public/sangeet.png";
import baraat from "../../../public/baarat.png";
import jaimala from "../../../public/jaimala.png";
import pheras from "../../../public/pheras.png";
import reception from "../../../public/reception.png";
import white from "../../../public/white-bg.jpeg";

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
    <div className="min-h-screen bg-url('/white-bg.jpeg') relative overflow-hidden">
      <Navigation />
      <Image src={white} fill alt="bg" className="absolute top-0 -z-10" />
      <div className="pt-[12%] flex justify-center">
        <div className="w-[840px] pt-10 flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-5xl md:text-5xl text-4xl">
            <h1 className="font-english text-[#c4a882] underline">Events</h1>
          </div>
          <section className="flex flex-col gap-4">
            <h2 className="text-center font-english text-4xl rounded-b-2xl py-2">
              5 <sup>th</sup> March
            </h2>

            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={mehendi} alt="mehendi" />
              <div className="lg:w-96 md:w-80 w-44 text-xs">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  MEHENDI CEREMONY
                </p>
                <p className="font-alice">
                  is a joyful, pre-wedding event where intricate henna designs
                  are applied to the bride&apos;s hands and feet, symbolizing
                  blessings for prosperity and good fortune in her marriage
                </p>
              </div>
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <div className="lg:w-96 md:w-80 w-44 text-xs">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  SANGEET CEREMONY
                </p>
                <p className="font-alice">
                  involving music, dancing, and singing that unites families and
                  friends to celebrate the upcoming union of the couple
                </p>
              </div>
              <Image height={140} width={140} src={sangeet} alt="sangeet" />
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-center font-english text-4xl rounded-b-2xl py-2">
              6<sup>th</sup> March
            </h2>

            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={haldi} alt="haldi" />
              <div className="lg:w-96 md:w-80 w-44 text-xs">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  HALDI CEREMONY
                </p>
                <p className="font-alice">
                  where a turmeric paste is applied to the bride and groom for
                  purification and to bless the couple with a happy start to
                  their married life, symbolizing a joyous and auspicious
                  beginning to their journey together
                </p>
              </div>
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <div className="lg:w-96 md:w-80 w-44 text-xs">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  BARAAT CEREMONY
                </p>
                <p className="font-alice">
                  s a vibrant and celebratory procession led by the groom and
                  his family, dancing and singing with music to the wedding
                  venue. This pre-wedding ritual symbolizes the groom&apos;s
                  joyful journey to marry the bride
                </p>
              </div>
              <Image height={140} width={140} src={baraat} alt="baraat" />
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={jaimala} alt="jaimala" />
              <div className="lg:w-96 md:w-80 w-44 text-xs">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  JAIMALA CEREMONY
                </p>
                <p className="font-alice">
                  ritual where the bride and groom garland each other,
                  symbolizing mutual acceptance and the official beginning of
                  their journey as a couple. This ancient and celebratory
                  tradition is filled with pomp and joy as family and guests
                  witness the couple&apos;s public declaration of love and
                  commitment.
                </p>
              </div>
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <div className="lg:w-96 md:w-80 w-44 text-xs">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  PHERAS CEREMONY
                </p>
                <p className="text-alice">
                  where the bride and groom circle a sacred fire, exchanging
                  vows and making seven solemn promises for their life together.
                  Each round, or &quot;phera&quot; is a prayer for different
                  aspects of a successful marriage, such as nourishment,
                  strength, prosperity, loyalty, and eternal companionship.
                </p>
              </div>

              <Image height={140} width={140} src={pheras} alt="pheras" />
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={reception} alt="reception" />
              <p className="font-alice text-2xl text-center text-[#c4a882]">
                RECEPTION & AFTER PARTY
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default EventsPage;

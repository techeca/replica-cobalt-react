import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {lines} from '../utils'
import BtnCob from '../ui/BtnCob'
import BtnOut from '../ui/BtnOut'
import TitleHero from "./TitleHero";
import SubTitle from "./SubTitle";
import ImageExample from "./ImageExample";
import ParticlesEffect from "./ParticlesEffect";

export default function Hero({title, subtitle, img, toSection}){
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

    return (
        <section className="relative isolate transform-gpu pt-14">
            {/*TOP gradient until text "Unleash the powers of..."*/}
            <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
            {/*Background lines of TOP*/}  
            {lines}
            <div className="py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="relative mx-auto max-w-3xl text-center">
                  {/*Main Title*/}
                  <TitleHero text={title} />
                  {/*SubTitle :p*/}
                  <SubTitle text={subtitle} />
                  {/*Group button*/}  
                  <div className="mt-10 flex flex-col items-center justify-center gap-y-8">
                    <BtnCob text={'Join Waitlist'} />
                    <BtnOut text={'Learn More'} href={toSection} />
                  </div>
                </div>
                {/*Particles & Image example of the system*/}
                <div className='relative pt-16'>
                  {init && <ParticlesEffect />}
                  <ImageExample img={img} />
                </div>
              </div>
            </div>
          </section>
    )
}
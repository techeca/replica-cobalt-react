import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import appimg from '../../assets/1.webp'
import BtnCob from '../ui/BtnCob'
import {icons, lines} from '../utils'

export default function Hero(){
    const [init, setInit] = useState(false);
    
    function BtnOut({text}){
        return (
            <div className='group hover:cursor-pointer'>
                <a href='#intro' className='flex flex-col items-center gap-1'>
                    <p className='text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100'>{text}</p>
                    {icons.arrow}
                </a>
            </div>
        )
    }

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

      //const particlesLoaded = () => {};

      const options = useMemo(
        () => ({
          background: {
            color: {
              
              opacity: 0,
            },
          },
          fpsLimit: 120,
          
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "top",
              enable: true,
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: false,
              },
              value: 70,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            shape: {
                close: true,
                fill: true,
                type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }),
        [],
      ); 

    return (
        <section className="relative isolate transform-gpu pt-14">
            <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
            {lines}
            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                    <div className="relative mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]">Unleash the power of intuitive finance</h1>
                            <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl">Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-y-8">
                            <BtnCob text={'Join Whitelist'} />
                            <BtnOut text={'Learn More'} />
                        </div>
                    </div>
                    <div className='perspective-[1500px] relative pt-16'>
                        {init && 
                            <Particles className="pointer-events-none absolute -top-36 left-1/2 h-[32rem] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-[60rem]"
                                id="tsparticles"
                                data-testid="tsparticles"
                                particlesLoaded={() => {}}
                                options={options}
                            />
                        }
                        <div className="relative" style={{transform: 'none'}}>
                            <div className="absolute -top-px right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                                <div className="h-px w-full animate-starlight-right bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"></div>
                            </div>
                            <div className="rounded-md bg-zinc-950 ring-1 ring-white/10 lg:rounded-2xl">
                                <div className=''>
                                <img alt="App screenshot" className='rounded-md lg:rounded-2xl' width="4200" height="auto" src={appimg} />
                                </div>
                            </div>
                            <div className="absolute left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                                <div className="h-px w-full animate-starlight-left bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </section>
    )
}
import BtnCob from "../ui/BtnCob"
import { lines2 } from "../utils"

export default function Join({title, subtitle}){

    return(
        <section className='relative mx-auto mt-16 max-w-full p-6 pb-12 pt-20 lg:px-8'>
            <div className='user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]'></div>
            <div className='user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]'></div>
            <div className='relative isolate'>
              {lines2}
              <div className='absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
                <div className='aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20' style={{clipPath:'polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)'}}></div>
              </div>
              <div className='mx-auto max-w-xl text-center'>
                <h2 className='bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl'>
                {title}</h2>
                <p className='mx-auto mt-6 max-w-xl text-lg text-zinc-400/80'>
                  {subtitle}
                </p>
                <div className='mt-12 flex items-center justify-center'>
                  <BtnCob text={'Join the waitlist'} />
                </div>
              </div>
            </div>
          </section>
    )
}
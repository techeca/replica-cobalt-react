import keyboard from '../../../assets/4.webp'
import keys from '../../../assets/5.webp'
import { backgrounds } from '../../utils'


export default function Example(){

    return(
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <div className="absolute top-6 z-20 h-[234px] w-[314px] rounded-lg bg-zinc-900/60 ring-1 ring-zinc-100/5 backdrop-blur-sm md:top-8 lg:left-16">
            {backgrounds.menu}
          </div>
          <div className="absolute -left-16 bottom-10 h-[243px] w-[891px] sm:-left-12 lg:left-8">
                <img alt="Keyboard" loading="lazy" width="891" height="243" decoding="async" data-nimg="1" className="absolute z-10 hidden h-full w-full lg:block" src={keys}/>
                <img alt="Keyboard" loading="lazy" width="891" height="243" decoding="async" data-nimg="1" className="absolute h-full w-full" src={keyboard}/>
          </div>
        </div>
    )
}
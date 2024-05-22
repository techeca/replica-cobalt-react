//import appimg from '../../assets/1.webp'

export default function ImageExample({img}){

    return(
        <div className="relative" style={{transform: 'none'}}>
            {/*Efecto superior derecho*/}
            <div className="absolute -top-px right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                <div className="h-px w-full animate-starlight-right bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"></div>
            </div>
            {/*Imagen*/}
            <div className="rounded-md bg-zinc-950 ring-1 ring-white/10 lg:rounded-2xl">
                <img alt="App screenshot" className='rounded-md lg:rounded-2xl' width="4200" height="auto" src={img} />     
            </div>
            {/*Efecto inferior izquierdo*/}
            <div className="absolute left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                <div className="h-px w-full animate-starlight-left bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"></div>
            </div>
        </div>                                 
    )
}
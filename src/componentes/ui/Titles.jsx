export default function Titles({children}){

    return(
        <div className='text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07]'>
            <span className='bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent'>
                {children}
            </span>
        </div>    
    )
}
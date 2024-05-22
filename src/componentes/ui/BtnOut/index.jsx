import { icons } from "../../utils"

export default function BtnOut({text, href}){

    return(
        <div className='group hover:cursor-pointer'>
                <a href={href} className='flex flex-col items-center gap-1'>
                    <p className='text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100'>{text}</p>
                    {icons.arrow}
                </a>
            </div>
    )
}
import { icons } from "../../utils"
export default function LiTime({time}){

    return(
            <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-400/10">
                    {icons.coIcon}
                </div>
                <div className="text-sm/5 text-zinc-500">Cobalt • 
                    <span className="text-xs/5 ml-1">{time}</span>
                </div>
            </div>
    )
}
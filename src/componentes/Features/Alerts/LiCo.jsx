export default function LiCo({children}) {
    return(
            <li className="relative flex gap-x-2">
                <div className="absolute -bottom-6 -top-10 left-0 flex w-6 justify-center">
                    <div className="w-px bg-zinc-800"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-zinc-950 ring-1 ring-zinc-800"></div>
                </div>

                <div className="flex-auto select-none rounded-md bg-zinc-900 p-3 ring-1 ring-inset ring-zinc-400/10">
                    {children}
                </div>
            </li>
    )
}
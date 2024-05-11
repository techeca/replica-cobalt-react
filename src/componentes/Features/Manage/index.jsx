import CardCob from "../../ui/CardCob"
import Example from "./Example"
import { backgrounds } from "../../utils"

export default function Manage(props){
    return(
        <CardCob {...props}>
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden pt-6 [mask:linear-gradient(black,black_70%,transparent)] md:pt-8">
                <div className="absolute inset-0 -z-10">
                    {backgrounds.circle}
                </div>
                <Example />
            </div>
            <div className="mt-auto w-full space-y-4 px-8 pb-8">
                <h3 className="text-lg/none font-medium text-zinc-200">Manage in real time</h3>
                <p className="max-w-md text-sm text-zinc-400/80 xl:max-w-sm">Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.</p>
            </div>
        </CardCob>     
    )
}
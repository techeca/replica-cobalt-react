import { backgrounds } from "../utils"
import InputChatAI from "./InputChatAI"

export default function Chat(){

    return(
        <div className='col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1'>
                <div className='relative flex h-full w-full transform-gpu items-center justify-center overflow-hidden'>
                  <div className='absolute inset-0 h-full w-full [mask:radial-gradient(50%_50%_at_50%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0)_100%)]'>
                    <div className='absolute inset-0 -z-10 h-full w-full text-zinc-300/10 [mask:linear-gradient(black,black_60%,transparent)]'>
                      {backgrounds.cubes}
                    </div>
                  </div>
                  <div className='relative flex h-full w-full flex-col items-center justify-end px-4 pb-12 sm:px-8 lg:pb-16'>
                    <div className='rounded-xl bg-cyan-400/10 p-2'>
                      <div className='select-none rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0px_1px_1px_theme(colors.white/30%),0px_1px_3px_theme(colors.cyan.500/35%),0px_0px_0px_1px_theme(colors.cyan.500)]'>
                        Hey! How can I help you?
                      </div>
                    </div>
                    <InputChatAI />
                  </div>
                </div>
                <div className='mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8'>
                  <h3 className='text-lg/none font-medium text-zinc-200'>Chat with Genius</h3>
                  <p className='max-w-sm text-sm text-zinc-400/80'>Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless.</p>
                </div>
              </div>
    )
}
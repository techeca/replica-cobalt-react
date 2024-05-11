import { icons, backgrounds } from "../utils"

export default function Smart(){

    return(
        <div className='col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1'>
              <div className='relative flex h-full w-full items-center justify-center overflow-hidden px-3 pt-3'>
                  <div className='relative h-full w-full rounded-xl [mask:radial-gradient(65%_65%_at_50%_40%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]'>
                    <div className='absolute inset-x-0 top-16 h-40 w-full rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 opacity-25 blur-[6rem]'></div>
                    <div className='absolute left-0 top-0 h-full w-full min-w-[1024px] opacity-20 [mask:linear-gradient(black,transparent)]'>
                      {backgrounds.backslash}
                    </div>
                  </div>
                  <div className='absolute h-full max-h-[300px] w-11/12 max-w-[500px] rounded-lg border border-zinc-100/5 bg-zinc-900 [mask:linear-gradient(black,black_75%,transparent)] md:w-4/5'>
                    <div className='relative flex h-full w-full items-center justify-center'>
                      {backgrounds.graphLine}
                      <div className='absolute top-16 px-2 text-xs/4'>
                        <div className='flex flex-row items-center gap-2 rounded-md bg-zinc-800 px-2 py-1.5 ring-1 ring-zinc-400/20'>
                          <div className='text-orange-400'>
                            {icons.danger}
                          </div>
                          <div className='flex flex-col gap-1 ml-2'>
                            <p className='font-medium text-zinc-300'>Critical balance alert</p>
                            <p className='max-w-[12rem] text-zinc-400'>You will have less than $2,500 in available funds in May</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8'>
                  <h3 className='text-lg/none font-medium text-zinc-200'>Smart forecasting</h3>
                  <p className='max-w-sm text-sm text-zinc-400/80'>{`Harness the power of Cobalt's predictive analytics to map out the financial future of your business.`}</p>
                  <div></div>
                </div>
              </div>
    )
}
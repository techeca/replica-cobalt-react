import BtnCob from '../BtnCob'
import { icons } from '../../utils'

export default function NavCob(){

    return(
        <header className="absolute inset-x-0 z-10">
          <div className="flex justify-center">
            <div className="mx-4 w-full max-w-7xl">
                <nav className="flex min-h-[5rem] items-center justify-between px-4 py-3">
                    <a href='#'>
                        {icons.cobalICon}
                    </a>
                    {/*button Joun Whitelist*/}
                    <div className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6">
                        <a href="#">Blog</a>
                        <BtnCob text={'Join the waitlist'} />
                    </div>
                </nav>
            </div>
          </div>
        </header>
        
    )
}
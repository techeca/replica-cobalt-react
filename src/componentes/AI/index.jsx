import Titles from "../ui/Titles"
import Chat from "./Chat"
import Smart from "./Smart"

export default function AI(){


    return(
        <section className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
            <div className='grid max-w-xl items-start justify-between gap-5'>
              <Titles>Meet Genius</Titles>
              <div className='text-lg text-zinc-400/80'>
                Our AI-driven assistant is designed to decode complex financial figures and
                <span className='text-zinc-200'> illuminate key trends </span>
                in your business.
              </div>
            </div>
            <div className='mt-16 grid gap-4 lg:grid-cols-2 lg:gap-6 xl:gap-8'>
              <Smart />
              <Chat />
            </div>
          </section>
    )
}
import Titles from "../ui/Titles"

export default function Top(props){

    return(
        <div {...props} className='grid max-w-xl items-start justify-between gap-5'>
            <Titles>
                Everything you need. 
                <br></br>
                Nothing you don’t
            </Titles>
            
            <div className='text-lg text-zinc-400/80'>
                Financial management and visibility in one place. Experience <span className='text-zinc-200'>a flexible toolkit</span> that makes every task feel like a breeze.
            </div>
        </div>
    )
}
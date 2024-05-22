import Example from './Example';
import CardCob from '../../ui/CardCob.jsx';
import { backgrounds } from '../../utils.jsx';

export default function Insights(props){

    return(
        <CardCob {...props} className={`h-[480px]`}>
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                <div className="absolute top-6 h-[300px] w-[230px] rounded-lg bg-zinc-900 ring-1 ring-zinc-100/10 sm:right-6 md:right-8 md:top-8">
                    <Example />
                </div>
                <div className="relative -z-10 h-full w-full [mask:linear-gradient(to_left,transparent,black_150%)]">
                <div className="absolute -left-2 right-0 top-0">
                    {backgrounds.graph}
                </div>
                </div>
            </div>
                    
            <div className="mt-auto w-full space-y-4 px-8 pb-8">
                <h3 className="text-lg/none font-medium text-zinc-200">Insights at your fingertips</h3>
                <p className="max-w-sm text-sm text-zinc-400/80">All your data and finances in one place to provide quick answers and make decisions instantly.</p>
            </div>
        </CardCob>  
    )
}
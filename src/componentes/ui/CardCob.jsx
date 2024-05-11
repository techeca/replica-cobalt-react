export default function CardCob({children, ...props}) {

    return(
        <div {...props} className="col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:col-span-3 lg:col-span-5 xl:col-span-4">
            {children}
        </div>
    )
}
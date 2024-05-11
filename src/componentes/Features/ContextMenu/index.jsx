import Example from "./Example"

export default function ContextMenu(props){

    return(
        <div {...props} className="order-5 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-3 md:col-span-3 lg:col-span-7 xl:order-5 xl:col-span-5">
        <Example />
        <div className="mt-auto w-full space-y-4 px-8 pb-8">
          <h3 className="text-lg/none font-medium text-zinc-200">
            You’re in control
          </h3>
          <p className="max-w-sm text-sm text-zinc-400/80">
            Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.
          </p>
        </div>
      </div>
    )
}
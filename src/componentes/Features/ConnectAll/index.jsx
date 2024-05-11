import Example from "./Example";

export default function ConnectAll(props){

    return(
        <div {...props} className="order-4 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-5 xl:order-4 xl:col-span-7">     
          <Example />
            <div className="mt-auto w-full space-y-4 px-8 pb-8">
              <h3 className="text-lg/none font-medium text-zinc-200">Connect all your apps</h3>
              <p className="max-w-md text-sm text-zinc-400/80 xl:max-w-sm">Bring your data with our built-in integrations for accounting, revenue tools and banking.</p>
            </div>
        </div>
    )
}
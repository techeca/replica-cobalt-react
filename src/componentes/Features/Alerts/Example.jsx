import LiCo from "./LiCo"
import LiTime from "./LiTime"

export default function Example(props) {
    return (
        <div {...props} className="mb-4 h-full w-full overflow-hidden [mask:linear-gradient(transparent,black,transparent)]">
            <ul role="list" className="space-y-4 pl-2 pr-4 pt-2">
                <LiCo>
                    <LiTime time={'2h ago'} />
                    <div className="ml-7">
                        <p className="mt-1.5 text-xs/5 text-zinc-500">💳 Monica is requesting a new card</p>
                        <p className="text-xs/5 text-zinc-500">Card type: Virtual</p>
                        <p className="text-xs/5 text-zinc-500">Spend limit: $500 monthly</p>
                        <div className="mt-2 flex gap-2.5">
                            <button className="flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800">Approve</button>
                            <button className="flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800">Decline</button>
                            <button className="flex items-center justify-center rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-300 transition hover:bg-zinc-800">Edit</button>
                        </div>
                    </div>
                </LiCo>
                <LiCo>
                    <LiTime time={'52m ago'} />
                    <div className="ml-7">
                        <p className="mt-1.5 text-xs/5 text-zinc-500">📈 Revenue increase alert</p>
                        <p className="text-xs/5 text-zinc-500">27% increase in the last 7 days</p>
                    </div>
                </LiCo>
                <LiCo>
                    <LiTime time={'Just now'} />
                    <div className="ml-7">
                        <p className="mt-1.5 text-xs/5 text-zinc-500">🚨 Large expense alert</p>
                        <p className="text-xs/5 text-zinc-500">Amount: $2,487.92</p>
                    </div>
                </LiCo>
            </ul>
        </div>


    )
  }
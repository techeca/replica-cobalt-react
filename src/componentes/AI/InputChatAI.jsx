import { useEffect, useRef, useCallback } from "react";
import { backgrounds } from "../utils"

export default function InputChatAI(){
    const words = useRef(["What's the level of fixed cost?","Can we afford a new $2500 laptop?", "What's our break-even point?", "How long is our runway?", "Do we have any overdues", "What's the sales forecast in Q2?"]);
    const i = useRef(0);
    const j = useRef(0);
    const isDeleting = useRef(false);
    const timerId = useRef(null);

    const typewrites = useCallback(() => {
        const element = document.getElementById("typewriter");

        if (isDeleting.current && j.current <= 0) {
            isDeleting.current = false;
            i.current = (i.current + 1) % words.current.length;
            timerId.current = setTimeout(typewrites, 2000);
        } else if (isDeleting.current) {
            element.textContent = words.current[i.current].substring(0, j.current - 1);
            j.current--;
            timerId.current = setTimeout(typewrites, 1000 / words.current[i.current].length);
        } else if (j.current === words.current[i.current].length) {
            isDeleting.current = true;
            timerId.current = setTimeout(typewrites, 2000);
        } else {
            element.textContent = words.current[i.current].substring(0, j.current + 1);
            j.current++;
            timerId.current = setTimeout(typewrites, 1000 / words.current[i.current].length);
        }
    }, [words]);

    useEffect(() => {
        timerId.current = setTimeout(typewrites, 2000);
        // Cleanup function to clear any running intervals when the component unmounts
        return () => clearTimeout(timerId.current);
    }, [typewrites]);

    return(
        <div className='mt-20 flex w-full items-center justify-between rounded-md bg-zinc-900 px-3 py-2 shadow-md ring-1 ring-zinc-200/10'>
            <div className='inline-block items-center truncate text-sm text-zinc-400'>
                ✨
                          <span>
                            <span id="typewriter" className='inline'></span>
                            <div className='inline-block h-5 w-px translate-y-1 bg-zinc-500'></div>
                          </span>
                        </div>
                        <button className="relative inline-flex shrink-0 text-sm font-medium text-zinc-200">
                            <span className="z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-950 px-3 py-1.5 ring-1 ring-zinc-400/10 transition hover:ring-zinc-400/40 max-md:hidden">
                                Ask Genius
                            </span>
                            <span className="z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-950 px-2 py-1.5 ring-1 ring-zinc-400/10 transition hover:ring-zinc-400/40 md:hidden">
                                {backgrounds.shiny}
                            </span>
                            <span className="absolute h-full w-full blur-[1rem] motion-safe:animate-pulse" style={{background:'linear-gradient(90deg, rgba(255, 214, 0, 0.2) 0%, rgba(255, 46, 0, 0.3) 10%, rgba(219, 0, 255, 0.5) 25%, rgb(97, 0, 255) 45%, rgb(0, 255, 117) 65%, rgb(0, 255, 255) 80%, rgba(20, 0, 255, 0.3) 100%)'}}></span>
                        </button>
                      </div>                       
    )
}
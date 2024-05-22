import Desc from "./Desc"
import Titles from "../ui/Titles"

export default function UpInfo(){
    return(
        <section id="intro" className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
            <div className="grid items-start justify-between gap-5 md:grid-cols-2">
              <Titles >
                Who said finance has to
                <br></br>
                be boring?
              </Titles>
              <Desc>
                 With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of advanced financial management right at your fingertips. 
                <span className="text-zinc-200"> Say no to spreadsheets and tools designed in the 80s.</span>
              </Desc>
            </div>
          </section>
    )
}
//import { icons } from "../../utils"
import CardCob from "../../ui/CardCob.jsx"
import Example from "./Example.jsx"

export default function Alerts(props){

    return(
        <CardCob {...props}>
            <Example data-testid="example" />
            <div className="mt-auto w-full space-y-4 px-8 pb-8">
                <h3 className="text-lg/none font-medium text-zinc-200">Important business alerts</h3>
                <p className="max-w-sm text-sm text-zinc-400/80">Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.</p>
            </div>
        </CardCob>
    )
}
import Insights from './Insights'
import Manage from './Manage'
import Alerts from './Alerts'
import ConnectAll from './ConnectAll'
import ContextMenu from './ContextMenu'
import Top from './Top.jsx'

export default function Features(){

    return(
        <section className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
            <Top data-testid="top" />
            <div className="mt-16 grid grid-cols-6 gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-8">
                <Insights data-testid="insights" />
                <Manage data-testid="manage" />
                <Alerts data-testid="alerts" />
                <ConnectAll data-testid="connectAll" />
                <ContextMenu data-testid="contextMenu" />
            </div>
        </section>
    )
}
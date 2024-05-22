import Hero from './componentes/Hero'
import Info from './componentes/Info'
import Features from './componentes/Features'
import AI from './componentes/AI'
import Join from './componentes/Join'
import Foot from './componentes/ui/Foot'
import NavCob from './componentes/ui/NavCob'

import appimg from './assets/1.webp'

function App() {

  return (
    <div className="bg-zinc-950 antialiased scroll-smooth h-full">
      <div className="overflow-clip">
        <NavCob />
        
        <main>
          {/*First section*/} 
          <Hero
            title={`Unleash the power of intuitive finance`} 
            subtitle={`Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.`} 
            img={appimg}
            toSection={`#intro`} 
            />
          {/*Second section*/}
          <Info /> 
          {/*Third section - 6 cards*/}
          <Features /> 
          {/*IA feature - 2 cards*/}
          <AI /> 
          <Join 
            title={`See where financial automation can take your business.`} 
            subtitle={`The first financial tool you'll love. And the last one you'll ever need.`}
            />  
        </main>
        
        <Foot />
      </div>
    </div>
  )
}

export default App

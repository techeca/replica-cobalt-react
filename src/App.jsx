import Hero from './componentes/Hero'
import Info from './componentes/Info'
import Features from './componentes/Features'
import AI from './componentes/AI'
import Join from './componentes/Join'
import Foot from './componentes/Foot'
import NavCob from './componentes/NavCob'

function App() {

  return (
    <div className="bg-zinc-950 antialiased selection:bg-cyan-300 selection:text-cyan-800 scroll-smooth h-full">
      <div className="overflow-clip">
        <header className="absolute inset-x-0 top-0 z-10">
          <div className="relative flex justify-center">
            <div className="mx-4 w-full max-w-7xl">
              <NavCob />
            </div>
          </div>
        </header>
        
        <main> 
          <Hero />
          <Info /> 
          <Features /> 
          <AI /> 
          <Join />  
        </main>
        
        <Foot />
      </div>
    </div>
  )
}

export default App

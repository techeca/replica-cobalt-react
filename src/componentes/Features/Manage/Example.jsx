import hand from '../../../assets/3.webp'
import phoneimg from '../../../assets/2.webp'


export default function Example() {
    return (
      <>
        <div className="absolute bottom-0 right-12 sm:right-44 md:right-16 lg:right-40 xl:right-0">
          <img alt="App hand" width="163" height="149" src={hand}/>
        </div>
        <div className="h-full">
          <img alt="Mobile app" width="163" height="335" src={phoneimg}/>
        </div>
      </>
    )
  }
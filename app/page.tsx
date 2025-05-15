import Carousel from "./components/carousel"
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Home() {
  const slides = [
    '/b_s_m_494334691_1624864054897894_7337477547114014200_n.jpg',
    '/b_494815723_662971103211297_1012557790628101125_n.jpg',
    '/b_494329702_1647706609283720_1754832116793324017_n.jpg',
    '/b_494332022_1886393372110283_566263732319858300_n.jpg',
    '/b_494814074_711796674675800_1916715554277404591_n.jpg',
    '/b_s_494334285_1202180258303455_3402547453332226795_n.jpg',
    '/b_s_494328194_1006288311698056_932510846075985259_n.jpg',
    '/b_s_494329823_3106490832837996_9169633562725432498_n.jpg'
  ]
  return <div>
    <div className="flex justify-center" id="paragon">
      <img  
          src='/paragon_bladerz.svg'
          alt="beys on grass"
          className="h-18 my-2 px-4"
        />
    </div>
    <nav className="flex justify-center border-4 border-blue-700 border-x-0 h-fit">
      <ul className="flex flex-wrap justify-center">
        <li className="sm:px-3 sm:py-1 px-2 py-1 cursor-pointer duration-200 hover:bg-blue-700 sm:text-xl text-md">
          <a href="#A">THE TEAM</a>
        </li>
        <li className="sm:px-3 sm:py-1 px-2 py-1 cursor-pointer duration-200 hover:bg-blue-700 sm:text-xl text-md">
          <a href="#T">TOURNAMENTS</a>
        </li>
        <li className="sm:px-3 sm:py-1 px-2 py-1 cursor-pointer duration-200 hover:bg-blue-700 sm:text-xl text-md">
          <a href="#G">GALLERY</a>
        </li>
      </ul>
    </nav>
    <section className="relative">
      <Carousel>
        {slides.map((s,i) => 
          <img 
            key={i}
            src={s}
            alt={`slide ${i}`}
          />
        )}
      </Carousel>
      <div className="absolute bg-linear-to-b from-transparent to-black to-50% flex items-center justify-center p-20 w-full -bottom-25">
        <h1 className="text-5xl sm:text-7xl text-blue-600 font-semibold text-center tracking-widest text-shadow-lg/20">PARAGON<br/>BLADERZ</h1>
      </div>
    </section>
    <section 
      className="mt-25 flex flex-col justify-center items-center"
      id="A"
    >
        <h2 className="px-5 py-2 text-3xl font-semibold my-2 border-5 border-blue-700">THE TEAM</h2>
        <p>Cebu-based bladers</p>
    </section>
    <section 
      className="mt-40 flex flex-col justify-center items-center"
      id="T"
    >
        <h2 className="px-5 py-2 text-3xl font-semibold my-2 border-5 border-blue-700">TOURNAMENTS</h2>
        <img 
          src='b_t_494817139_656001597429783_7428790834717624631_n.jpg'
          className="max-w-300 object-contain w-full"
        />
    </section>
    <section 
      className="mt-40 flex flex-col justify-center items-center"
      id="G"
    >
      <h2 className="px-5 py-2 text-3xl font-semibold my-2 border-5 border-blue-700">GALLERY</h2>
      <div className="grid grid-cols-2 gap-4 max-w-300 px-4">
        <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg" src="/mem_sol_495267989_494908636950121_8940839545545571094_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/mem_494828565_743370448027516_5600344745900665180_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/mem_494830752_681245034521396_6974237041716304235_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/b_s_m_494339475_1036654078425165_5703770604074050291_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/bey_494325979_1547426696214892_3118215286646782658_n.jpg" alt=""/>
          </div>
          <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg" src="/mem_494819502_619214090577307_6059440257508329745_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/bey_494334439_1193032779035824_8540591792009556940_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/s_m_495267941_655845344092218_5757956685815558560_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/s_m_495267985_1197821911826164_3512951518097994096_n.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="/s_m_495267531_1652344918792240_5330667631527052241_n.jpg" alt=""/>
          </div>
      </div>
    </section>
    <footer>
      <div className="flex justify-center p-4">
        <div className="w-full max-w-300 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src='/logo.png' width={60} alt="logo" />
            <a href="https://www.facebook.com/profile.php?id=61576092004210" target="_">
              <img
                src='/2023_Facebook_icon.svg'
                width={40}
              />
            </a>
          </div>
          <a
            href="#paragon" 
            className="bg-white/5 p-5 rounded-full cursor-pointer hover:bg-white/90 hover:-translate-y-2 hover:text-black duration-200"
          >
              <FaAngleDoubleUp/>
          </a>
        </div>
      </div>
      <div className="flex justify-center text-[2.5vw] bg-black p-2 border-1 border-gray-800 border-x-0 border-b-0 text-gray-500 sm:text-sm">
        Copyright &#169; 2025 Paragon Bladerz | Developed by&nbsp;<a href="https://rybanez.vercel.app/" target="_" className="text-blue-900 hover:text-blue-600">Richard Ybañez</a>
      </div>
    </footer>
  </div>
}

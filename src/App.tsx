import { useEffect, useState } from "react"
import NavBar from "@/scenes/NavBar"
import Home from "@/scenes/Home"
import { SelectedPage } from "@/shared/Types/SelectedPage"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfScreen, setIstopOfScreen] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIstopOfScreen(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIstopOfScreen(false)
      }
    }
    window.addEventListener(`scroll`, handleScroll)
    return ()=> removeEventListener(`scroll`, handleScroll)
  })
  return (
    <div className='bg-[#F8F4EB]'><NavBar isTopOfScreen={isTopOfScreen}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App

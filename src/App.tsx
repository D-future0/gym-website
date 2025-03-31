import { useState } from "react"
import NavBar from "./scenes/NavBar"
import { SelectedPage } from "@/shared/SelectedPage"

function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div className='bg-[#F8F4EB]'><NavBar
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    </div>
  )
}

export default App

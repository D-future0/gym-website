import { useState } from "react"
import NavBar from "./scenes/NavBar"

enum SelectedPage{
Home = 'home',
Benefits = 'benefits',
OurClasses = 'ourclasses',
ContactUs = 'contactus',
}
function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div className='bg-[#F8F4EB]'><NavBar
    selectedPage={selectedPage}
    setSelectedPage={selectedPage}
    />
    </div>
  )
}

export default App

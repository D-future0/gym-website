import { SelectedPage } from "@/shared/SelectedPage";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    children: React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink onClick={()=> setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`} className={'rounded-md px-10 py-2 bg-[#FFC132] hover:bg-[#FF6B66]'}>{children}</AnchorLink>
  )
}

export default ActionButton
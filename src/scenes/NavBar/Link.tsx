import { SelectedPage } from '@/shared/SelectedPage';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void
}

function Link({page, selectedPage, setSelectedPage}: Props) {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage? "text-[#5E0000]" : ""} transition duration-500 hover:text-[#FFA6A3]`}
    href=''
    onClick={()=>setSelectedPage(lowerCasePage)}
    >{page}</AnchorLink>
  )
}

export default Link
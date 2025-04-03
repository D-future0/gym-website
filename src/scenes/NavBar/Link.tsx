import { SelectedPage } from '@/shared/Types/SelectedPage';
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
    className={`${selectedPage === lowerCasePage? "text-[#FF6B66]" : ""} transition duration-500 hover:text-[#FFA6A3]`}
    href='#about'
    onClick={()=>setSelectedPage(lowerCasePage)}
    >{page}</AnchorLink>
  )
}

export default Link
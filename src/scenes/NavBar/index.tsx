// import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Logo from '@/assets/logo.png'
import Link from './Link'
import { SelectedPage } from "@/shared/Types/Types"
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';


type Props = {
  isTopOfScreen: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

function NavBar({ isTopOfScreen, selectedPage, setSelectedPage }: Props) {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
  
  const flexBetween = 'flex items-center justify-between'
  const flexCenter = 'flex items-center justify-center'
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
  const navBackground = isTopOfScreen ? '': 'bg-[#FFE1E0] drop-shadow'
  return (
    <nav>
      <div className={`${flexCenter} ${navBackground} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} w-5/6 gap-16`}>
          <img alt='logo' src={Logo} className='w-34 sm:w-40 ' />
          {
            isAboveMediumScreen ?
              <div className={`${flexBetween} w-full gap-8`}>
                <div className={`${flexBetween} w-full gap-8`}>
                  <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page='Benefit' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexCenter} w-full gap-8`}>
                  <p>sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div> :
              <button className='rounded-full bg-[#FFC132] p-2' onClick={() => { setIsMenuToggle(!isMenuToggle) }}>
                <Bars3Icon width={34} className='text-gray-100 text-3xl' />
              </button>
          }
        </div>
        {/*moble menu*/}
        {
          !isAboveMediumScreen && isMenuToggle ?
            <div className='fixed right-0 bottom-0 z-60 h-full w-[250px] bg-[#FFE1E0]'>
              <div className='flex justify-end items-center py-6 px-10'>
                <button className='rounded-full bg-[#FFE1E0] p-2' onClick={() => { setIsMenuToggle(!isMenuToggle); }}>
                  <XMarkIcon width={30} className='text-gray-400 text-3xl' />
                </button>
              </div>
              <div className='ml-[25%] text-xl flex flex-col gap-8'>
                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page='Benefit' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
              {/* <div className={`${flexCenter} w-full gap-8`}>
                    <p>sign in</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                  </div> */}
            </div>
            : <div></div>
        }
      </div>
    </nav>
  );
}

export default NavBar
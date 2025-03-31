// import React, { useState } from 'react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Logo from '@/assets/logo.png'
import Link from './Link'
import { SelectedPage } from "@/shared/SelectedPage"


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

function NavBar({ selectedPage, setSelectedPage}: Props) {
  const flexBetween = 'flex items-center justify-center'
  
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} max-w-[80vw]`}>
          <img alt='logo' src={Logo} width={100} />
          <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} w-full gap-8`}>
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Benefit' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div className={`${flexBetween} w-full gap-8`}>
              <p>sign in</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
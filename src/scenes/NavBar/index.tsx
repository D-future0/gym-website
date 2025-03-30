import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void
}

function NavBar({ }: Props) {
  const flexBetween = 'flex items-center justify-center'
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} max-w-[80vw]`}>
          <img alt='logo' src={Logo} width={100} />
          <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} w-full gap-8`}>
              <Link page='Home' selectedPage={''} setSelectedPage={function (value: string): void {
                throw new Error('Function not implemented.')
              }} />
              <Link page='Benefit' selectedPage={''} setSelectedPage={function (value: string): void {
                throw new Error('Function not implemented.')
              }} />
              <Link page='Our Classes' selectedPage={''} setSelectedPage={function (value: string): void {
                throw new Error('Function not implemented.')
              }} />
              <Link page='Contact Us' selectedPage={''} setSelectedPage={function (value: string): void {
                throw new Error('Function not implemented.')
              }} />
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
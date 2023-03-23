import React from "react"
import { Link } from "react-router-dom"
import Logo from '../img/header/logo.png'
import MobNav from "./MobNav"



function Header() {
    return (
      <header className="fixed w-full px-8 lg:px-16 z-30 h-[100px] lg:h-[130px] flex items-center">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <Link to={'/DROHbl4'}>
            <img src={Logo} alt='' />
          </Link>
          <nav className="hidden xl:flex gap-10">
            <Link to={'/DROHbl4'} className='text-[#696c6d] hover:text-primary transition '>Домой</Link>
            <Link to={'/People'} className='text-[#696c6d] hover:text-primary transition '>Чечики</Link>
            <Link to={'/Aircraft'} className='text-[#696c6d] hover:text-primary transition '>Дронычы</Link>
            <Link to={'/Services'} className='text-[#696c6d] hover:text-primary transition '>Услуги</Link>
            <Link to={'/About'} className='text-[#696c6d] hover:text-primary transition '>Обо мне</Link>

          </nav>
        </div>
        <MobNav />
      </header>
    )
  }
  
  export default Header
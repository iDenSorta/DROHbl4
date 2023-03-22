import React from "react"
import { Link } from "react-router-dom"
import Logo from '../img/header/logo.png'

function Header() {
    return (
      <header className="bg-pink-200 fixed w-full px-8 lg:px-16 z-30 h-[100px] lg:h-[130px] flex items-center">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={'/'}>
          <img src={Logo} alt='' />
        </Link>
        <h1 className="lg:fixed">Cфоткаю вашу хуйню</h1>
        <nav className="hidden lg:flex gap-10">
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition '>Домой</Link>
          <Link to={'/People'} className='text-[#696c6d] hover:text-primary transition '>Чечики</Link>
          <Link to={'/Aircraft'} className='text-[#696c6d] hover:text-primary transition '>Дронычы</Link>
          <Link to={'/Services'} className='text-[#696c6d] hover:text-primary transition '>Услуги</Link>
          <Link to={'/About'} className='text-[#696c6d] hover:text-primary transition '>Обо мне</Link>

        </nav>
        </div>
      </header>
    )
  }
  
  export default Header
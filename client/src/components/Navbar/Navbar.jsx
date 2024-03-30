import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../assets/SO_logo.svg';
import search from '../../assets/search.svg';
import Avatar from '../../components/Avatar/Avatar';
import "./Navbar.css";

function Navbar() {

  let User = null;

  return (
    <nav className='main-nav'>
        <div className='navbar'>

            <Link to='/' className='nav-item nav-logo'>
                <img src={Logo} alt='logo' className='navLogo' />
            </Link>

            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>

            <form>
                <input type='text' placeholder='Search...' />
                <img src={search} alt='searchLogo' className='searchIcon' />
            </form>

            { User === null ?
                <>
                  <Link to='/Auth/login' className='nav-item nav-links'>Log in</Link>
                  <Link to='/Auth/signup' className='nav-item nav-links signup'>Sign up</Link>
                </> :
                <>
                  <Link to='/User' className='nav-links avatarLogo'><Avatar backgroundColor='#009dff' px="10px" py="16px" borderRadius='50%' color='white'>Ir</Avatar></Link>
                  <button className='nav-item nav-links'>Log out</button>
                </>
            }

        </div>
    </nav>
  )
}

export default Navbar
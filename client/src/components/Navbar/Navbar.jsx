import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../assets/SO_logo.svg';
import search from '../../assets/search.svg';
import Avatar from '../../components/Avatar/Avatar';
import "./Navbar.css";

import {useSelector, useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  const dispatch = useDispatch()

  let User = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))

  }, [dispatch])
    

  return (
    <nav className='main-nav'>
        <div className='navbar'>

            <Link to='/' className='nav-item nav-logo'>
                <img src={Logo} alt='logo' className='navLogo' />
            </Link>

            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>

            {
              User === null ? 
              <form>
                <input type='text' placeholder='Search...' />
                <img src={search} alt='searchLogo' className='searchIcon' />
              </form> 
              :
              <form style={{margin:"0 50px 0 0"}}>
                <input type='text' placeholder='Search...' />
                <img src={search} alt='searchLogo' className='searchIcon' />
              </form>
            }

            { User === null ?
                <>
                  <Link to='/Auth/login' className='nav-item nav-links'>Log in</Link>
                  <Link to='/Auth/signup' className='nav-item nav-links signup'>Sign up</Link>
                </> :
                <>
                  <Link to='/User' style={{margin:"0"}} className='nav-links avatarLogo'><Avatar backgroundColor='#009dff' fontSize="20px" px="5px" py="15px" borderRadius='50%' color='white'>{User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                  <button className='nav-item nav-links' style={{margin:"0 50px 0 0px"}}>Log out</button>
                </>
            }

        </div>
    </nav>
  )
}

export default Navbar
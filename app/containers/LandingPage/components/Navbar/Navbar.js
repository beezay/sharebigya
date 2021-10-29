import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks, NavBtn, NavBtnlink, Logo,  } from './Navbar.elements';
// import {FaBars} from 'react-icons/fa';
// import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
// import Logos from '../../images/logo.png'

let Logos = 'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/logo.png'



const Navbar = ({toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [scrollNavText, setScrollNavText] = useState(false);


  const changeNav = () =>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false);
    }
  }

  const changeNavtext = () =>{
    if(window.scrollY >= 800){
      setScrollNavText(true)
    }else{
      setScrollNavText(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',changeNav);
    window.addEventListener('scroll',changeNavtext);
  },[]);

  const toggleHome = () =>{
    scroll.scrollToTop();
  }

   const toggleHomeBottom = () =>{
    scroll.scrollToBottom();
  }

  
    return (
    <>

      <Nav scrollNav={scrollNav}>
        
        <NavbarContainer>

          <NavLogo to='/' onClick={toggleHome}>
          <Logo src={Logos} alt="img"></Logo>
      </NavLogo>
          <MobileIcon onClick={toggle}>
            {/* <FaBars /> */}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true}
              exact='true' offset={-80}
              scrollNavText={scrollNavText}
             
              
              >
                {/* About */}
                Discover
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
                smooth={true} duration={500} spy={true}
                exact='true' offset={-80}
                scrollNavText={scrollNavText}
              >
                {/* Discover */}
                Features
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
                smooth={true} duration={500} spy={true}
                exact='true' offset={-80}
                scrollNavText={scrollNavText}
              >Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnlink to='/' onClick={toggleHomeBottom}
             scrollNavText={scrollNavText}
            >Analyze Your Charts</NavBtnlink>
          </NavBtn>
        </NavbarContainer>
      </Nav>  
           </>
)
};

export default Navbar

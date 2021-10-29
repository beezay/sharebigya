import React, {useState} from 'react';
import  styled from 'styled-components';
import {Link} from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';

import {Nav,NavIcon,SidebarNav,SidebarWrap, Logo, NavLogo} from './css/SidebarElements'
import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';
import { FormItemContext } from 'antd/lib/form/context';
import FormItemLabel from 'antd/lib/form/FormItemLabel';

let Logos = 'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/header.svg'
// let Logos = './header.svg'

const Sidebar = ({item}) => {
 const [sidebar, setSidebar] = useState(false)

 const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        {/* <IconContext.Provider value= {{color: '#fff'}}> */}
            <Nav onClick={sidebar == true ? showSidebar : null }>
                <NavIcon  to ='#'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                       <NavLogo>
          <Logo src={Logos} alt="img" onClick={showSidebar} />
      </NavLogo>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar = {sidebar}>
                <SidebarWrap >
                <NavIcon  to ='#'>
                    {/* <AiIcons.AiOutlineClose onClick= {showSidebar}/> */}
                </NavIcon>
                {SidebarData.map((item,index) =>{
                    return <SubMenu item={item} key={index} onClick= {showSidebar}   />
                })}
                </SidebarWrap>
            </SidebarNav>
            {/* </IconContext.Provider> */}
            
        </>
    )
}

export default Sidebar

import  styled from 'styled-components';
import {Link} from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link as LinkR } from 'react-router-dom';



export const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* z-index:1000; */
    background: linear-gradient(to right,#0741A2,#8E9AEE);
`;

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SidebarNav = styled.nav`
   background: #15171c ;
    width: 230px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top:0;
    z-index:100;
    left: ${({ sidebar })=> (sidebar? '0' : '-100%')};
    background: linear-gradient(to right,#0741A2,#8E9AEE);
    opacity: 0.9;

`;

export const SidebarWrap = styled.div`
width: 100%


`;

export const Logo = styled.img``;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 24px;
  font-weight: bold;
  justify-self: flex-start;
  text-decoration: none;
  height: 50%;
  width: 60px;

`;
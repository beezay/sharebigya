import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
/* background: ${({scrollNav}) => (scrollNav ? 'transparent' : `linear-gradient(to right,#0741A2,#8E9AEE)`)}; */
/* background: linear-gradient(to right,#0741A2,#8E9AEE); */
background: linear-gradient(to right,#C6C6C6,#8E9AEE);
height: 70px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
position:sticky;
top:0;
z-index:100;

@media screen and (max-width: 960px){
  transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  height: 100%;
  max-width: 1100px;
`;


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

export const Logo = styled.img``;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
    color: #fff;
    
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1rem;
  line-height: 1.6rem;
  height: 100%;
  align-items: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }

`;

export const NavItem = styled.li`
  padding-left: .85rem;
  padding-right: .85rem;

  
`;

export const NavLinks = styled(LinkS)`
  text-decoration: none;
  font-size: 1rem;
  /* color: #fff; */
  text-transform: uppercase;
  cursor: pointer;
  display:flex;
  align-items:center;
  height:100%;
  color: ${({scrollNavText}) => (scrollNavText ? '#fff' : '#fff')};

  &.active{
    border-bottom: 3px solid #01bf71;
}

`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
 
`;

export const NavBtnlink = styled(LinkR)`

  text-transform: capitalize;
  text-decoration: none;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 10px 22px;
  outline: none;
  border-radius: 50px;
  border: 1px solid hsla(0,0%,100%,.3);
  /* color: #fff; */
  border-color: ${({scrollNavText}) => (scrollNavText ? 'black' : '#fff')};

  background: transparent;
   text-transform: capitalize;
   white-space: nowrap;
   color: ${({scrollNavText}) => (scrollNavText ? 'black' : '#fff')};
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;


    }
`;

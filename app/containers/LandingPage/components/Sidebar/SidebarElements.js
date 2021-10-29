import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
// import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  height: 100%;
  z-index: 999;
  background: linear-gradient(to right, #2780a7, #6fa4cb);
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  color: white;
  align-content: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0') };
  top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

// export const CloseIcon = styled(FaTimes)`
//   color: #fff;
// `;
export const CloseIcon = styled.div`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
 &:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;

}
`;

export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 16px 64px;
  outline: none;
  border-radius: 50px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  color: #fff;
  background: transparent;
  text-transform: capitalize;
  white-space: nowrap;
  &:hover{
    transition: 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}
 `;

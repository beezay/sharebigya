import  styled from 'styled-components';
import {Link} from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
////
import { constant } from 'lodash';

export const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }

`;


export const SidebarLabel = styled.span`
margin-left: 16px;

`;
export const DropdownLink = styled(Link)`
    background: #414757;
    height:50px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover{
        background: #632ce4;
        cursor: pointer;

    }
`;
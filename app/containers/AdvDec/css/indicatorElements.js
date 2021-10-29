import  styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;

`;
export const TextLabel = styled.span`
font-size: 15px;

`;
export const CheckBox = styled.div`
height: 15px;
width: 15px; 
background-color: ${props => props.color ? props.color : props.color}
    

`;
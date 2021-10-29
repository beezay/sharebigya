import styled from 'styled-components';
// import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';


export const HeroContainer = styled.div`
    /* background: #0c0c0c; */
     /* background: linear-gradient(to right,#0741A2,#8E9AEE); */
     background: linear-gradient(to right,#C6C6C6,#8E9AEE);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    /* position: relative; */
    top:0;
    width:100%
    z-index: 1;
    height:800px;
    position:relative;
    width:100%;
    justify-content: center;
    align-items: center;


    /* :before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
        ;
        z-index: 2;

    } */


`;

export const HeroBg = styled.div`
position: absolute;
top :0;
right:0;
bottom:0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;

`;

export const VideoBg = styled.video`
width: 100%;
height:  100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const HeroContent = styled.div`
        z-index: 3;
        max-width: 1200px;
        position: absolute;
        padding: 8px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* margin-top: 40px; */

`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;

    }

    
    @media screen and (max-width: 480){
        font-size: 32px;

    }
`;

export const HeroP = styled.p`
    /* margin-top: 2px; */
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width:600px

    
    @media screen and (max-width: 768px){
        font-size: 24px;

    }

    
    @media screen and (max-width: 480){
        font-size: 18px;

    }
`;

export const HeroForm = styled.form`
    display: grid;
    margin-top: 25px;
    background: transparent;

`;

export const HeroInput = styled.input`
   color: black;
    /* background: transparent; */
    display: block;
    background: rgba(255,255,255,0.4);
    position: relative;
    outline: none;
    border:none;
    margin-bottom: 20px;
    width: 300px;
    padding: 15px;
    /* color: #333; */
    box-shadow: 0 2px 10px 1px rgb(0 0 0 / 50%);
    border-radius: 20px;

`;

export const HeroBtnWrapper = styled.div`
    /* margin-top: 32px; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;


// export const ArrowForward = styled(MdArrowForward)`
// margin-left: 8px;
// font-size: 20px;

// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
// margin-left: 8px;
// font-size: 20px;
// `;

export const ArrowForward = styled.div`
margin-left: 8px;
font-size: 20px;

`;

export const ArrowRight = styled.div`
margin-left: 8px;
font-size: 20px;
`;
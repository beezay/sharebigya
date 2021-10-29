import { identity } from 'lodash';
import React from 'react'
import { InfoContainer, InfoWrapper,
    InfoRow, Column1, TextWrapper, TopLine, Heading
    ,Subtitle,BtnWrap,Column2, ImgWrap, primary
    , dark, dark2, Img
    } from './InfoElements';
    import { Button } from '../ButtonElement';
    import {animateScroll as scroll} from 'react-scroll';

const InfoSection = ({lightBg,id, imgStart, topLine, lightText,
  headline, darkText, description, buttonLabel, img, alt
  }) => {


 const toggleHome = () =>{
    scroll.scrollToTop();
  }

    return (
 
      <>
      <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                      <TextWrapper>
                          <TopLine>
                              {topLine}
                          </TopLine>
                          <Heading lightText={lightText}>
                              {headline}
                          </Heading>
                          <Subtitle darkText={darkText} >
                              {description}
                          </Subtitle>
                          <BtnWrap>
                              <Button to='/' onClick={toggleHome}
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}
                              

                              >
                                  {buttonLabel}
                              </Button>
                                  
                          </BtnWrap>
                      </TextWrapper>
                  </Column1>
                  <Column2>
                      <ImgWrap>
                          <Img src={img} alt={alt}/>
                      </ImgWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
      
  </>
      
    )
}

export default InfoSection





// Yesto hunxa

// <Body>
//     <div>
//         <div>
//             Announcement
//         <div>
//         <div>
//             <div>
//                 <div>
//                     May3
//                 </div>
//                 <div>
//                     Lorem..... We Are Cool! 
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     May3
//                 </div>
//                 <div>
//                     Lorem..... We Are Cool! 
//                 </div>
//             </div>
//         </div>
//     <div>
// <Body>

//     ************ The End  {SunFlower} **********

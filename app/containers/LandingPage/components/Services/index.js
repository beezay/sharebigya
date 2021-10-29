import React from 'react';
// import Icon1 from '../../images/50.png'
// import Icon2 from '../../images/51.png'
// // import Icon3 from '../../images/53.png'
// // import Icon3 from {'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/51.png'};
import {
    ServicesContainer,ServicesH1,ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP,
    ImgWrap, Img
     
} from './ServicesElements';
let icon1 = 'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/50.png';
let icon2 = 'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/51.png';
let icon3 = 'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/53.png';



const Services = () => {
    return (
        <>
        <ServicesContainer id = "services">
            {/* <ImgWrap>
                <Img src={img} alt="background-image"></Img>
            </ImgWrap> */}
            <ServicesH1> Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2>Stock Expert</ServicesH2>
                    <ServicesP>Get Access to Our Stock Predictions
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Stock Expert</ServicesH2>
                    <ServicesP>Get Access to Our Stock Predictions
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Stock Expert</ServicesH2>
                    <ServicesP>Get Access to Our Stock Predictions
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services

import React ,{useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent,
    HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,HeroH1,
    HeroForm, HeroInput
    
    
    } from  './HeroElements';
    
    import {Button} from '../ButtonElement';
    

    // import Video from '../../videos/video.mp4';

    const Video = 'https://sharebigya-static.s3.ap-south-1.amazonaws.com/static/images/video.mp4';
const Hero = ({setEmail, setphoneNumber } )=> {
    const [hover, setHover] = useState (false);
    const [emailChange, setemailChange] = useState ('');
    const [phoneNumberChange, setphoneNumberChange] = useState ('');

    const onHover = () => {
        setHover(!hover);
    }
    const submitForm = () => {
      setphoneNumber(phoneNumberChange)
      setEmail(emailChange)
      
    }

    const handleEmailChange = e => {
      setemailChange(e.target.value);
    }
    const handlePhoneNumberChange = e => {
      setphoneNumberChange(e.target.value);
    }

    
  return ( 
    <HeroContainer>
      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
          </HeroBg> */}
            <HeroContent>
                <HeroH1>Become A Share Bigya With Us </HeroH1>
                <HeroP> Get access to our exclusive app that all allows you to do unlimited stock analysis</HeroP>
                <HeroForm > 
                    <HeroInput type='email' placeholder="Enter Email" 
                    id="email"
                    name="email"
                    type="email"
                    value={emailChange}
                    onChange={handleEmailChange}
                    />
                    <HeroInput type='number' placeholder="Enter Phone Number"
                    id="number"
                    name="number"
                    type="number"
                    value={phoneNumberChange}
                    onChange={handlePhoneNumberChange}
                    />
           
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary='true'
                     dark = 'true'
                     onClick={submitForm}
                     >
                    Subscribe {hover ? <ArrowForward /> : <ArrowRight />}
                  

                    </Button>
                 </HeroBtnWrapper>

                 </HeroForm>
            </HeroContent>
            
        </HeroContainer >
    )
}

export default Hero

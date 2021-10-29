import React,{useState, Suspense, lazy } from 'react'
import Hero from '../components/HeroSection';
import Navbar from '../components/Navbar/Navbar'
// import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import { Wrapper,Wrapper1,Wrapper2, Title } from './PagesElements';
import MainPage from '../../MainPage/Loadable';

const Sidebar  = lazy(() => import('../components/Sidebar'));

const Home = ( { setEmail, setphoneNumber } ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Suspense fallback={<></>}>
      <Sidebar isOpen={isOpen} toggle={toggle} /> 
      </Suspense>
      <Hero setEmail={setEmail} setphoneNumber={setphoneNumber}  />


      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      
      <Services />
      <InfoSection {...homeObjThree} />
      <Title> Subscribe to get access to more real time charts! </Title>
      <MainPage />
      
      
      
    
      </>
)
}
export default Home

import React,{useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Welcome from './welcome';
import WelcomeTwo from './welcomeTwo';
import WelcomeThree from './welcomeThree';
import { Header } from '../components/Header/Header';


const CarouselComponent = () => {
  const [openSecondComponent, setOpenSecondComponent] = useState(false);
  const [openThirdComponent, setOpenThirdComponent] = useState(false);

  return (
  <div>
            <Header />

   <section>
     <Welcome/>
   </section>
  </div>
  );
}

export default CarouselComponent;
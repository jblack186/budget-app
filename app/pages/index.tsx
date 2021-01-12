import * as React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

// component


const Index: React.FC<{}> = () => {



  return (
    <React.Fragment>
      <div className="right-home-container">
          <img className='rectangle-banner spotify' src="./Spotify (1).png" alt='spotify-banner'/>
          <img className='the-hand' src="./hand1.svg" alt='hand-reaching'/>       
      </div>
    </React.Fragment> 
  )
}


export default Index;
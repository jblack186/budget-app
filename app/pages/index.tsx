import * as React from 'react';
import { Heading, Flex, Button, Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';
// component
import { Header } from '../components/Header/Header';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';
import { ButtonSetting } from '../components/ui/chakra-ui/chakra-settings';


const Index: React.FC<{}> = () => {



  return (
    <React.Fragment>
      <BoxWrapper>
        <Header />
        <div id='bg-cover'>

          <Box
            position='absolute'
            left='-2em'
            bottom='0'
            top='30%'
            transform='translate(-0%, 30)'
            zIndex='99999999999999'
          >
            <Heading
              as='h2'
              position='relative'
              size='3xl'
              whiteSpace='nowrap'
              zIndex='99999999999999999999'
            >
              Banking &<br />
                 Budgeting,<br />
                 Made Simple
            </Heading>
            <Text mt={4} fontSize='3vmin' maxWidth='260px'>
              We help set your goals
              so you don’t have too.
            </Text>
            {/* 
                # Button

                current state of button(let's start) is being affect by 
                  - css position property
                  - Z index layer

                  - .right-home-container is z index is position on the outer layer
            
            */}
            <Button
              {...ButtonSetting}
              mt={5}
              backgroundColor='#00303F'
              color='#fff'
              cursor='pointer'
              zIndex='9999999999999'
              _hover={{
                background: "#FFFFFF",
                color: '#000'
              }}
              
            >
              Let's Start
            </Button>
          </Box>
        </div>
        <div className="right-home-container">
        <div>
          <img
            className='rectangle-banner spotify'
            src="./Spotify (1).png"
            alt='spotify-banner' />
                      <img
            className='rectangle-banner loan'
            src="./loan.png"
            alt='spotify-banner' />
          <img
            className='rectangle-banner savings'
            src="./savings.png"
            alt='spotify-banner' />

          </div>


          <img
            className='the-hand'
            src="./hand1.svg"
            alt='hand-reaching'
          />
        </div>
      </BoxWrapper>
    </React.Fragment> 
  )

}


export default Index;

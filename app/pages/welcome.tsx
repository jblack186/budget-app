import * as React from 'react';
import { Heading, Flex, Button, Box, Text, useMediaQuery } from '@chakra-ui/react';
import styled from 'styled-components';
// component
import { Header } from '../components/Header/Header';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';
import { ButtonSetting } from '../components/ui/chakra-ui/chakra-settings';


const Index: React.FC<{}> = () => {
  const [isLargerThan786] = useMediaQuery("(max-width: 768px)")

 



  return (
    <React.Fragment>
      <BoxWrapper>
        <Header />
        <div id='bg-cover-welcome'>

          <Box
            position='absolute'
            left={!isLargerThan786 ? '10em' : '50%'}
            marginLeft={!isLargerThan786 ? null : '-143px'}
            bottom='0'
            top='50%'
            marginTop='-230px'
            color='#fff'
            transform='translate(-0%, 30)'
            zIndex='99999999999999'
            fontWeight='bold'
          >
            <Heading
              as='h2'
              position='relative'
              size={!isLargerThan786 ? '4xl' : '3xl'}
              whiteSpace='nowrap'
            >
                 Welcome to<br />
                 In-Hand.io
            </Heading>
            <Text mt={4} fontSize={!isLargerThan786 ? '5.5vmin': '5vmin'} maxWidth='560px'>
              Take the guess work out of budgeting with an easy "50/30/20" rule
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
              Continue
            </Button>
          </Box>
          <img
            className='pieChart'
            src="./pieChart.svg"
            alt='pieChart'
          />


        </div>
        <div className="right-home-container">
        <div>
          </div>


          <img
            className='the-hand-up'
            src="./hand2.svg"
            alt='hand-reaching-up'
          />
        </div>
      </BoxWrapper>
    </React.Fragment> 
  )

}


export default Index;

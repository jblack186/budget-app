import React, { useState } from 'react';
import { Heading, Flex, Button, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';
import { ButtonSetting } from '../components/ui/chakra-ui/chakra-settings';
import WelcomeThree from './welcomeThree';
import { motion } from "framer-motion";


const WelcomeTwo = () => {
  const [isLargerThan786] = useMediaQuery("(max-width: 768px)")
  const [isLargerThan1128] = useMediaQuery("(max-width: 1128px)")
  const [openSecondComponents, setOpenSecondComponents] = useState(true);


  const closeTwo = () => {
    setOpenSecondComponents(false);

  }


  return (
    <React.Fragment>

      <div className={openSecondComponents ? 'block' : 'close'}>

        <BoxWrapper>
          <div className='welcome-top'></div>
          <div id='bg-cover-welcome'>
            <Box
              position='absolute'
              left={!isLargerThan786 ? '10em' : '50%'}
              marginLeft={!isLargerThan786 ? null : '-143px'}
              bottom='0'
              top={!isLargerThan1128 ? '50%' : '45%'}
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
                In-Hand.io Uses<br />
                 Realtime Data
            </Heading>
              <Text mt={4} fontSize={!isLargerThan786 ? '4vmin' : '3.5vmin'} maxWidth='560px'>
                We connect securely to your accounts with the Plaid API
            </Text>
              {/* 
                # Button

                current state of button(let's start) is being affect by 
                  - css position property
                  - Z index layer

                  - .right-home-container is z index is position on the outer layer
            
            */}
              <Button
                onClick={closeTwo}
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


          </div>
          <div className="right-home-container">
            <div>
            </div>


            <img
              className='the-thumbs-up'
              src="./hand3.svg"
              alt='hand-reaching-up'
            />
            <img
              className='pieChart'
              src="./pieChart.svg"
              alt='pieChart'
            />

          </div>

        </BoxWrapper>
      </div>
      <motion.section
        animate={{
          x: ['1000px', '0px']

        }}
        transition={{ duration: .5 }}
        className={openSecondComponents ? 'close' : 'open'}>
        <WelcomeThree />
      </motion.section>


    </React.Fragment>

  )

}


export default WelcomeTwo;

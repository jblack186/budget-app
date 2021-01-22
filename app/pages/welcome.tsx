import React,{useState} from 'react';
import WelcomeTwo from './welcomeTwo';
import { Heading, Flex, Button, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';
import { ButtonSetting } from '../components/ui/chakra-ui/chakra-settings';
import { motion } from "framer-motion";

const Welcome = (props) => {
  const [isLargerThan786] = useMediaQuery("(max-width: 768px)")
  const [isLargerThan1128] = useMediaQuery("(max-width: 1128px)")
  const [open, setOpen] = useState(true);


const close = () => {
  setOpen(false);
}

  return (
    <React.Fragment>
    <div className={open ? 'block' : 'close'}>
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
            onClick={close}
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
            className='the-hand-up'
            src="./hand2.svg"
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
          y: ['1000px', '0px']  
        }}
        transition={{ duration: .5 }}            
       
      className={open ? 'close' : 'open'}>
        <WelcomeTwo />
      </motion.section>


   
    </React.Fragment>
  )

}


export default Welcome;

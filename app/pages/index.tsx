import * as React from 'react';
import { Heading, Flex, Button, Box, Text, useMediaQuery } from '@chakra-ui/react';
import styled from 'styled-components';
// component
import { Header } from '../components/Header/Header';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';
import { ButtonSetting } from '../components/ui/chakra-ui/chakra-settings';
import Welcome from './welcome';
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const Index: React.FC<{}> = () => {
  const [isLargerThan786] = useMediaQuery("(max-width: 768px)")
  const [session, loading] = useSession();

  isLargerThan786 === true;

console.log('truthy', isLargerThan786)

  return (
    <React.Fragment>
      {!session && (
        <Welcome />
      )}
     {session && ( <BoxWrapper>
        <Header />
        Signed in as {session.user.email} <br />
            <div>You can now access our super secret pages</div>
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
            <button onClick={signOut}>sign out</button>
        <div id='bg-cover'>

          <Box
            position='absolute'
            left={!isLargerThan786 ? '-2em' : '50%'}
            marginLeft={!isLargerThan786 ? null : '-143px'}
            bottom='0'
            top='30%'
            transform='translate(-0%, 30)'
            zIndex='99999999999999'
          >
            <Heading
              as='h2'
              position='relative'
              size={!isLargerThan786 ? '4xl' : '3xl'}
              whiteSpace='nowrap'
            >
              Banking &<br />
                 Budgeting,<br />
                 Made Simple
            </Heading>
            <Text mt={4} fontSize={!isLargerThan786 ? '3vmin': '5vmin'} maxWidth='260px'>
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
     )}
    </React.Fragment> 
  )

}


export default Index;

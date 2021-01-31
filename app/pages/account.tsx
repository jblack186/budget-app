import React, { useState, useEffect } from 'react';
import TopDashboard from '../components/topDashboard';
import MidDashboard from '../components/midDashboard';
import Bottomdashboard from '../components/bottomDashboard';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ThemeProvider, ColorModeProvider, CSSReset, Box, FlexProps, Flex, Button } from '@chakra-ui/react';
import { FlexSetting, ButtonSetting, MainWrapperSetting } from '../components/ui/chakra-ui/chakra-settings';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';



const Account = () => {

    return (
        <BoxWrapper>
            <Flex
                width='100%'
                alignItems='flex-end'
                height='100vh'
                justifyContent='center'
            >
                <Flex
                    marginBottom='145px'
                    width='10%'
                    flexDir='column'

                >
                    <Navbar />
                </Flex>
                {/* Account and budget holder */}
                <Flex
                    height='90vh'

                    width='90%'
                    background='#EEEFF3'
                    borderRadius='10px'
                    justifyContent='center'


                >


                    <Flex
                        height='100%'
                        width='60%'
                        flexDir='column'
                    >
                        <Flex
                            margin='0 auto'
                            height='50%'
                            width='80%'
                            justifyContent='space-around'
                            alignItems='center'
                        >
                            <img src='/userPic.jpg' className='account-pic-holder' />

                            <div className='user-info'>
                                <p className='new'>New member</p>
                                <p className='user-name'>Gabriela Richardson</p>
                                <p>Budget Aggresiveness: Standard</p>
                                <div className="button-wrap">
                                    <input type="file" id="file" />
                                    <label for="file">Upload new picture</label></div>


                            </div>
                        </Flex>
                        <Flex
                            height='50%'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Box
                                width='100%'
                                height='200px'
                                border='1px solid black'
                            >

                            </Box>
                        </Flex>

                    </Flex>

                    <Flex
                        width='30%'
                        height='100%'
                        backgroundColor='white'
                    >

                    </Flex>

                </Flex>

            </Flex>

        </BoxWrapper>
    )

}


export default Account;


{/* <div className='account-container'>
<section className='nav-account-holder'>
    <Navbar />
</section>
<section className='mobile-nav-account-holder'>
    <Navbar />
</section>
<div className='account-budget-holder'>
    <section className='account-holder'>
    <img src='/userPic.jpg' className='account-pic-holder' />
        <div className='user-info'>
            <p className='new'>New member</p>
            <p className='user-name'>Gabriela Richardson</p>
            <p>Budget Aggresiveness: Standard</p>
            <div className="button-wrap">
            <input type="file" id="file" /> 
<label for="file">Upload new picture</label></div>

                
                                        </div>
    </section>
    <section className='budget-holder'>

    </section>
</div>
</div> */}

import * as React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react';

// components
import { RegisterForm } from '../components/form';
import { Header } from '../components/Header/Header';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';

const Register: React.FC<{}> = ({ }) => {
    return (
        <React.Fragment>
            <BoxWrapper>

                <Header />
                <Flex
                    width='85%'
                    maxWidth='1400px'
                    margin='auto'
                    alignItems='center'
                    height='100%'
                    justifyContent='left'
                >

                    <Flex
                        height='calc(100vh - 100px)'
                        justifyContent="left"
                        direction="column"
                        pt={10}
                    >
                        <Heading as='h1' size='4xl' mb={6}>Sign Up</Heading>
                        <RegisterForm />
                    </Flex>
                    <Box
                        position='absolute'
                        right='0'
                        top='0'
                        zIndex='-1'
                    >

                        <svg width="724" height="100vh" viewBox="0 0 724 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -154L73.4493 -94C150.396 -34 300.792 86 300.792 206C300.792 326 150.396 446 90.9372 566C27.9806 686 59.4589 806 73.4492 926C90.9372 1046 90.9371 1166 90.9371 1226L90.9371 1286L724 1286L724 1226C724 1166 724 1046 724 926C724 806 724 686 724 566C724 446 724 326 724 206C724 86 724 -34 724 -94L724 -154L0 -154Z" fill="#00303F" />
                            <g filter="url(#filter0_d)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M349 -171L422.449 -111C499.396 -51 649.792 69 649.792 189C649.792 309 499.396 429 439.937 549C376.981 669 408.459 789 422.449 909C439.937 1029 439.937 1149 439.937 1209L439.937 1269L1073 1269L1073 1209C1073 1149 1073 1029 1073 909C1073 789 1073 669 1073 549C1073 429 1073 309 1073 189C1073 69 1073 -51 1073 -111L1073 -171L349 -171Z" fill="#076E8E" />
                            </g>
                            <defs>
                                <filter id="filter0_d" x="345" y="-171" width="732" height="1448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </Box>
                </Flex>

            </BoxWrapper>

        </React.Fragment>
    )
}


export default Register;
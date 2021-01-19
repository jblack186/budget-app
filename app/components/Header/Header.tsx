import * as React from 'react';
import Link from 'next/Link';
import { useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router'

import {
    Flex,
    Wrap,
    WrapItem,
    Heading,
    Button
} from '@chakra-ui/react';

// component 
import { FlexSetting, ButtonSetting, FlexSettingWelcome } from '../ui/chakra-ui/chakra-settings';

export const Header: React.FC<{}> = ({ }) => {
    const [isLargerThan786] = useMediaQuery("(min-width: 768px)")
    const router = useRouter()
    console.log('router',router.pathname)

   
    return (
        <React.Fragment>
            <header>
                {/* 
                    # Flex
                    
                     - typescript issue

                    Type '{ children: Element[]; height?: String; width: String; justifyContent: String; alignItems: String; maxWidth: String; margin: String; }' is not assignable to type 'FlexProps'.
                    Types of property 'margin' are incompatible.
                    Type 'String' is not assignable to type 'ResponsiveValue<Margin<ReactText>>'.
                    Type 'String' is not assignable to type 'ResponsiveObject<Margin<ReactText>>'.
                    Index signature is missing in type 'String'.
                */}
                <Flex {...router.pathname === '/welcome' ? {...FlexSettingWelcome} : {...FlexSetting}}>
                    <Flex zIndex='999999999999999' alignItems="center">
                        <svg width="50" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="88" height="84">
                                <rect width="88" height="84" rx="42" fill="#00303F" />
                            </mask>
                            <g mask="url(#mask0)">
                                <rect width="69.2338" height="30" transform="matrix(0.853237 -0.521524 0.564608 0.825359 12 11.1072)" fill="#00303F" />
                                <rect width="75.9478" height="30" transform="matrix(0.853237 -0.521524 0.564608 0.825359 3 83.6086)" fill="#00303F" />
                            </g>
                        </svg>
                        <Heading ml={5} as='h1' size='lg'  zIndex="9999999999999" fontWeight={600}>in-hand.io</Heading>
                    </Flex>
                    <Wrap spacing={20}>
                        
                        <WrapItem display={isLargerThan786 ? 'block' : 'none' } zIndex='999999999999999' alignItems="center">
                            <Link href='/login'>Login</Link>
                        </WrapItem>
                        
                        <WrapItem display={router.pathname === '/welcome' ? 'none' : 'block'}>
                            <Link href='/register'>
                                <Button
                                    {...ButtonSetting}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </WrapItem>
                       
                    </Wrap>
                </Flex>
            </header>
        </React.Fragment>
    );
}
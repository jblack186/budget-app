import * as React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { isAbsolute } from 'path';



/****************** 
    layout structure 
******************/
type FlexProps = {
    height?: String;
    width: String;
    justifyContent: String;
    alignItems: String;
    maxWidth: String;
    margin: String;
}

export const FlexSetting: FlexProps = {
    height: '100px',
    width: "90%",
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: 'auto',
} as const;

export const FlexSettingWelcome: FlexProps= {
    height: '100px',
    width: "80%",
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: 'auto',
} as const;


/****************** 
    container 
******************/
type ButtonProps = {

}

export const ButtonSetting = {
    width: "152px",
    height: "48px",
    background: "#FFFFFF",
    borderRadius: "11px",
    zIndex:'9999999999999999',
    _hover: {
        color: '#fff',
        backgroundColor: "#00303F",
        cursor: "pointer",

    },
} as const;


/****************** 
    container 
******************/

type bgProps = {

}

export const MainWrapperSetting = {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    overflowY: 'hidden',
    backgroundColor: 'red',
} as const;

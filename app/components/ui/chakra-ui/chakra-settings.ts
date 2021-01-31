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
    zIndex: String;
    position: String;
    top: String;
    left: String;
}

export const FlexSetting: FlexProps = {
    height: '100px',
    width: "75%",
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: 'auto',
    zIndex: '999999999999999',
} as const;

export const FlexSettingWelcome: FlexProps= {
    position: 'absolute',
    top: '77px',
    left: '20px',
    height: '0px',
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
} as const;

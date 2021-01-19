import * as React from 'react';
import { Box } from '@chakra-ui/react';

// component
import { MainWrapperSetting } from '../chakra-ui/chakra-settings';

export const BoxWrapper: React.FC<{}> = ({ children }) => {
    return (
        <Box
            {...MainWrapperSetting}
        >
            {children}
        </Box>
    );
} 
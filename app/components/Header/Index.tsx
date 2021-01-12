import * as React from 'react';
import Link from 'next/Link';
// component 
import { Flex } from '../styled-components/styled-components-variable';

export const Header: React.FC<{}> = ({ }) => {
    return (
        <React.Fragment>
            <header>
                <Flex height='100px' width='100%'>
                    <h1>in-hand.io</h1>
                    <div>
                        <Link href='/'>Login</Link>
                        <Link href='/'>Sigin In</Link>
                    </div>
                </Flex>
            </header>
        </React.Fragment>
    );
}
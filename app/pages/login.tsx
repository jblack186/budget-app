import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// components
import { LoginForm } from '../components/form';

const Login: React.FC<{}> = ({ }) => {

    return (
        <Flex
            height='100vh'
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <Heading as='h1' size='lg' mb={6}>Login</Heading>
            <LoginForm />
        </Flex>
    )
}


export default Login;
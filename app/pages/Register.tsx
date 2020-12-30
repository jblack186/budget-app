import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// components
import { RegisterForm } from '../components/form';

const Register: React.FC<{}> = ({ }) => {
    return (
        <Flex
            height='100vh'
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <Heading as='h1' mb={6}>Register</Heading>
            <RegisterForm />
        </Flex>
    )
}


export default Register;
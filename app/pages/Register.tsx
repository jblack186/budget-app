import * as React from 'react';
import { Flex } from '@chakra-ui/react';

// components
import { RegisterForm } from '../components/form';

const Register: React.FC<{}> = ({ }) => {
    return (
        <Flex>
            <div>Register</div>
            <RegisterForm />
        </Flex>
    )
}


export default Register;
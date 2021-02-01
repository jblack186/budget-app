import React, { useState, useEffect } from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import * as Yup from 'yup';

// initialize var
interface FormProps {
    fullName: String;
    email: string;
    password: string;
}

// validation
const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required()
});

const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.email.value)
    const body = {
        email: e.currentTarget.email.value,
        name: e.currentTarget.name.value,
        password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (res.status === 201) {
        const userObj = await res.json();
        // writing our user object to the state
        //   mutate(userObj);
    } else {
        //   setErrorMsg(await res.text());
    }
};




export const RegisterForm: React.FC<{}> = ({ }) => {

    // show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    const initialValues: FormProps = {
        name: '',
        email: '',
        password: '',
    };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}

                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    setTimeout(() => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        actions.resetForm();
                    }, 1000)
                }}
            >
                {({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleRegisterSubmit}>
                        <FormControl id="name">
                            <FormLabel>name</FormLabel>
                            <Input
                                type="name"
                                size='lg'
                                variant="filled"
                                placeholder="name"
                                onChange={handleChange}
                            />
                            {/* send error */}
                            {errors.name && touched.name ? (
                                <FormHelperText>{errors.name}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl id="email" mt={4}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                size='lg'
                                variant="filled"
                                placeholder="email"
                                onChange={handleChange}
                            />
                            {/* send error */}
                            {errors.email && touched.email ? (
                                <FormHelperText>{errors.email}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl id="password" mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    w='300px'
                                    type={show ? "text" : "password"}
                                    size='lg'
                                    variant="filled"
                                    placeholder="password"
                                    onChange={handleChange}
                                />
                                <InputRightElement width="4.5rem">
                                    {/* show password */}
                                    <Button h="1.75rem" size="sm" mt={2} onClick={handleClick}>
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {/* send error */}
                            {errors.password && touched.password ? (
                                <FormHelperText>{errors.password}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <Button
                            type="submit"
                            size="md"
                            height="48px"
                            width="300px"
                            color='#fff'
                            // border="2px"
                            bg='#43D8C9'
                            borderColor="none"
                            isLoading={isSubmitting}
                            mt={6}
                        >Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}


// login form

const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.email.value)
    const body = {
        email: e.currentTarget.email.value,
        name: e.currentTarget.name.value,
        password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (res.status === 201) {
        const userObj = await res.json();
        // writing our user object to the state
        //   mutate(userObj);
    } else {
        //   setErrorMsg(await res.text());
    }
};




export const LoginForm: React.FC<{}> = () => {

    // show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    //   const [errorMsg, setErrorMsg] = useState('');


    const initialValues: FormProps = {
        email: '',
        password: '',
    };

    async function handleLoginSubmit(e) {
        e.preventDefault();
        const body = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (res.status === 200) {
            const userObj = await res.json();
        } else {
            //   setErrorMsg('Incorrect username or password. Try again!');
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}

                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    setTimeout(() => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        actions.resetForm();
                    }, 1000)
                }}
            >
                {({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleLoginSubmit}>
                        <FormControl id="email" mt={4}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                size='lg'
                                variant="filled"
                                placeholder="email"
                                onChange={handleChange}
                            />
                            {/* send error */}
                            {errors.email && touched.email ? (
                                <FormHelperText>{errors.email}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl id="password" mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    w='300px'
                                    type={show ? "text" : "password"}
                                    size='lg'
                                    variant="filled"
                                    placeholder="password"
                                    onChange={handleChange}
                                />
                                <InputRightElement width="4.5rem">
                                    {/* show password */}
                                    <Button h="1.75rem" size="sm" mt={2} onClick={handleClick}>
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {/* send error */}
                            {errors.password && touched.password ? (
                                <FormHelperText>{errors.password}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <Button
                            type="submit"
                            size="md"
                            height="48px"
                            width="300px"
                            color='#fff'
                            // border="2px"
                            bg='#43D8C9'
                            borderColor="none"
                            isLoading={isSubmitting}
                            mt={6}
                        >Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
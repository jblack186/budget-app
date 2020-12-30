import * as React from 'react';
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


export const RegisterForm: React.FC<{}> = ({ }) => {

    // show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    const initialValues: FormProps = {
        fullName: '',
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
                    <Form onSubmit={handleSubmit}>
                        <FormControl id="fullName">
                            <FormLabel>fullName</FormLabel>
                            <Input
                                type="fullName"
                                size='lg'
                                variant="filled"
                                placeholder="fullName"
                                onChange={handleChange}
                            />
                            {/* send error */}
                            {errors.fullName && touched.fullName ? (
                                <FormHelperText>{errors.fullName}</FormHelperText>
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
                            border="2px"
                            borderColor="green.500"
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


export const LoginForm: React.FC<{}> = () => {
    // show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const initialValues: FormProps = {
        fullName: '',
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
                    <Form onSubmit={handleSubmit}>
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
                            border="2px"
                            borderColor="green.500"
                            isLoading={isSubmitting}
                            mt={6}
                        >Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import * as Yup from 'yup';

interface FormProps {
    fullName: String;
    email: string;
    password: string;
}

export const RegisterForm: React.FC<{}> = ({ }) => {
    const initialValues: FormProps = {
        fullName: '',
        email: '',
        password: '',
    };
    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="First Name" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
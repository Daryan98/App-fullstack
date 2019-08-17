import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';
import { Field, Form } from 'formik';
import FormikTextField from '../../Components/FormikFields/FormikTextField';

export const initialValues = {
  fullName: '',
  email: '',
};

const SigninForm = props => {
  return (
    <Form>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} lg={6}>
          <Field
            name="email"
            fullWidth
            label="email"
            component={FormikTextField}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Field
            name="password"
            fullWidth
            label="........"
            component={FormikTextField}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

SigninForm.propTypes = {};

export default SigninForm;

const PASSWORD_MIN_LENGTH = 8;
export const validationSchema = Yup.object({
  email: Yup.string('')
  .email('Please enter a valid email')
  .required('Field is required'),
  password: Yup.string('')
    .min(
      PASSWORD_MIN_LENGTH,
      `password field should minimum be ${PASSWORD_MIN_LENGTH} characters or numbers long`,
    )
    .required('Field is required'),
});

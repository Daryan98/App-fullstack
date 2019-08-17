import React, { Component } from 'react'
import { Formik } from 'formik';

import Form, { initialValues, validationSchema } from './form';

export class Signin extends Component {
  render() {
    return (
      <div>
        div
        {/* <Formik
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
          initialValues={initialValues}
          validationSchema={validationSchema}
          render={formikProps => <Form {...formikProps} />}
        /> */}
      </div>
    )
  }
}

export default Signin

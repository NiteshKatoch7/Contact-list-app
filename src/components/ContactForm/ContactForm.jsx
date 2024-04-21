import React, { useContext, useRef } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormWrapper } from './ContactFormStyle';
import UserContext from '../../context/UserContext';

export default function ContactForm( {initialUser} ) {

    //To Close the Modal Popup
    const {handleModalPopup, postNewUser, submitBtn, handleEditUser} = useContext(UserContext);

    // Using Reference on inputs, so that I can focus on the inputs that fail on validation.
    const emailInputRef = useRef(null);
    const companyNameInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const cityInputRef = useRef(null);
    const zipInputRef = useRef(null);

    // When the validation on forms, trigger error we focus on the input's with error.
    const focusOnError = (ref) => {
        if(ref.current){
            ref.current.focus();
        }
    }
    
    return (
        // Using Formik to handle forms and their inputs.
      <Formik

        // Setting Conditional Intial Values for Edit User action on our form.
        initialValues={{ 
          name: initialUser ? initialUser.name : '',
          username: initialUser ? initialUser.username : '',
          email: initialUser ? initialUser.email : '',
          website: initialUser ? initialUser.website : '',
          phone: initialUser ? initialUser.phone : '',
          companyname: initialUser ? initialUser.company.name : '',
          companycaption: initialUser ? initialUser.company.bs : '',
          companycatchphrase: initialUser ? initialUser.company.catchPhrase : '',
          suite: initialUser ? initialUser.address.suite : '',
          streetname: initialUser ? initialUser.address.street : '',
          city: initialUser ? initialUser.address.city : '',
          zipcode: initialUser ? initialUser.address.zipcode : ''
        }}

        // Disable validation on change
        validateOnChange={false}

        // Writing all the validation rules.
        validate={values => {
          const errors = {};

          if (!values.name) {
            errors.name = 'Required';
            focusOnError(nameInputRef);
            return errors;
          }

          if (!values.email) {
            errors.email = 'Required';
            focusOnError(emailInputRef);
            return errors;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
            focusOnError(emailInputRef);
            return errors;
          }

          if (!values.companyname) {
            errors.companyname = 'Required';
            focusOnError(companyNameInputRef);
            return errors;
          }

          if (!values.city) {
            errors.city = 'Required';
            focusOnError(cityInputRef);
            return errors;
          }

          if (!values.zipcode) {
            errors.zipcode = 'Required';
            focusOnError(zipInputRef);
            return errors;
          }

          return errors;
        }}

        // On Submission of the form, if no validation check fails, we write to extract the Data.
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if(submitBtn){
              //Posting the New User data to the api, to add new user to contact list.
              postNewUser(values);
            }else{
              //Posting the New User data to the api, to add new user to contact list.
              handleEditUser(values);
            }

            // Handling the Modal Popup to close
            handleModalPopup();
            setSubmitting(false);
          }, 400);
        }}

      >
        {({ isSubmitting }) => (
          <Form>
            <FormWrapper className='form-wrapper'>
              <div className='form-container w-33'>
                <div className='form-row'>
                    <label>Name*</label>
                    <Field type="text" name="name" innerRef={nameInputRef} />
                    <ErrorMessage name="name" component="div" className='error-message' />
                </div>
              </div>
              <div className='form-container w-33'>
                <div className='form-row'>
                    <label>Username</label>
                    <Field type="text" name="username" />
                </div>
              </div>
              <div className='form-container w-33'>
                <div className='form-row'>
                    <label>Email*</label>
                    <Field type="email" name="email" innerRef={emailInputRef} />
                    <ErrorMessage name="email" component="div" className='error-message' />
                </div>
              </div>
              <div className='form-container w-33'>
                <div className='form-row'>
                    <label>Website</label>
                    <Field type="text" name="website" />
                </div>
              </div>
              <div className='form-container w-33'>
                <div className='form-row'>
                    <label>Phone Number</label>
                    <Field type="text" name="phone" />
                </div>
              </div>
              <div className='form-container title w-100'>
                <h1>Company Details</h1>
              </div>
              <div className='form-container w-50'>
                <div className='form-row'>
                    <label>Company Name*</label>
                    <Field type="text" name="companyname" innerRef={companyNameInputRef} />
                    <ErrorMessage name="companyname" component="div" className='error-message' />
                </div>
              </div>
              <div className='form-container w-50'>
                <div className='form-row'>
                    <label>Company Caption</label>
                    <Field type="text" name="companycaption" />
                </div>
              </div>
              <div className='form-container w-100'>
                <div className='form-row'>
                    <label>Company CatchPhrase</label>
                    <Field type="text" name="companycatchphrase" />
                </div>
              </div>
              <div className='form-container title w-100'>
                <h1>Address Details</h1>
              </div>
              <div className='form-container w-50'>
                <div className='form-row'>
                    <label>Apartment Name</label>
                    <Field type="text" name="suite" />
                </div>
              </div>
              <div className='form-container w-50'>
                <div className='form-row'>
                    <label>Street Name</label>
                    <Field type="text" name="streetname" />
                </div>
              </div>
              <div className='form-container w-50'>
                <div className='form-row'>
                    <label>City*</label>
                    <Field type="text" name="city" innerRef={cityInputRef} />
                    <ErrorMessage name="city" component="div" className='error-message' />
                </div>
              </div>
              <div className='form-container w-50'>
                <div className='form-row'>
                    <label>Zip Code*</label>
                    <Field type="text" name="zipcode" innerRef={zipInputRef} />
                    <ErrorMessage name="zipcode" component="div" className='error-message' />
                </div>
              </div>
            </FormWrapper>
            <FormWrapper>
              <div className='form-container submit-btns'>
                <button type="submit" disabled={isSubmitting}>
                  { submitBtn ? 'Submit' : 'Update' }
                </button>
              </div>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    )
}

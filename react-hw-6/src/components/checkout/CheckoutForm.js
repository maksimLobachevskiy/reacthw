import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  getFormDataAction,
  deleteAllProductsAction
} from "../../store/checkout/actions";
import "./CheckoutForm.scss";
import PropTypes from "prop-types";

const formValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Minimum length is 2 letters"),
  surname: yup
    .string()
    .required("Surname is required")
    .min(2, "Minimum length is 2 letters"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Value must be a positive number")
    .integer("Age can't include a decimal point")
    .min(2, "Minimum length is 2 numbers"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Minimum length is 5 symbols"),
  phone: yup
    .number()
    .required("Phone number is required")
    .positive("Value must be a positive number")
    .integer("A phone number can't include a decimal point")
    .min(10, "Minimum length is 10 symbols")
});

const CheckoutForm = ({ getFormData, productsCart, deleteAllProducts }) => {
  const handleSubmit = (value, { setSubmitting }) => {
    setSubmitting(false);
    getFormData(value, productsCart);
    deleteAllProducts();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        address: "",
        phone: ""
      }}
      validationSchema={formValidation}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        return (
          <Form
            onSubmit={formikProps.handleSubmit}
            className='checkout-form'
            noValidate
          >
            <div className='checkout-form__wrapper'>
              <h3 className='checkout-form__title '>Checkout</h3>
              <label>
                <Field
                  component='input'
                  type='text'
                  name='name'
                  placeholder='Enter your Name'
                  className='checkout-form__input'
                />
                <div className='error__message'>
                  <ErrorMessage name='name' />
                </div>
              </label>
              <label>
                <Field
                  component='input'
                  type='text'
                  name='surname'
                  placeholder='Enter your Surname'
                  className='checkout-form__input'
                />
                <div className='error__message'>
                  <ErrorMessage name='surname' />
                </div>
              </label>
              <label>
                <Field
                  component='input'
                  type='text'
                  name='age'
                  placeholder='Enter your Age'
                  className='checkout-form__input'
                />
                <div className='error__message'>
                  <ErrorMessage name='age' />
                </div>
              </label>
              <label>
                <Field
                  component='input'
                  type='text'
                  name='address'
                  placeholder='Enter your Address'
                  className='checkout-form__input'
                />
                <div className='error__message'>
                  <ErrorMessage name='address' />
                </div>
              </label>
              <label>
                <Field
                  component='input'
                  type='tel'
                  name='phone'
                  placeholder='Enter your Phone number'
                  className='checkout-form__input'
                />
                <div className='error__message'>
                  <ErrorMessage name='phone' />
                </div>
              </label>
            </div>

            <button
              className='checkout-form__btn'
              type='submit'
              disabled={formikProps.submitting}
            >
              Checkout
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

CheckoutForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
  productsCart: PropTypes.array.isRequired,
  deleteAllProducts: PropTypes.func.isRequired
};

const mapStoreToProps = ({ productsCart }) => {
  return {
    productsCart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFormData: (formValues, productsCart) =>
      dispatch(getFormDataAction(formValues, productsCart)),
    deleteAllProducts: () => dispatch(deleteAllProductsAction())
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(CheckoutForm);

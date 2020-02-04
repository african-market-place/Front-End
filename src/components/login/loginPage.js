import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
// import keyframes from "styled-components";

export default function LoginForm() {
  function handleSubmit(values, actions) {
    console.log(values);
    axios
      .post("", values)
      .then(response => {
        console.log(response.data);
        actions.resetForm();
      })
      .catch(error => console.log(error));
  }

  return (
    <StyledForm>
      <div className='LoginForm'>
        <h1>Africa MarketPlace LoginForm</h1>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initialState}>
          <Form>
            <ErrorMessage name='username' component='div' className='error' />
            <label htmlFor='user_username'>Username</label>
            <Field
              type='text'
              id='user_username'
              name='username'
              placeholder='Enter your username here'
            />
            <ErrorMessage name='location' component='div' className='error' />
            <label htmlFor='user_location'>Location</label>
            <Field
              type='text'
              id='user_location'
              name='location'
              placeholder='Enter your location here'
            />
            <ErrorMessage name='password' component='div' className='error' />
            <label htmlFor='user_password'>Password</label>
            <Field
              type='password'
              id='user_password'
              name='password'
              placeholder='Enter your password here'
            />
            <button type='submit'>Log-in</button>
          </Form>
        </Formik>
      </div>
    </StyledForm>
  );
}
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter a username"),
  location: Yup.string().required("Please enter a location"),
  password: Yup.string().required("Please enter a password")
});
const initialState = {
  username: "",
  location: "",
  password: ""
};
const StyledForm = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #bdc3c7;
  background-image: url("https://www.pinclipart.com/picdir/big/384-3848811_african-animals-vinyl-wall-art-2083x2083-png-download.png");
  background-size: 100% 100%;
  padding: 10px;
  margin: 16px auto;

  & form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  & field {
    background: #d7dde8;
  }
  & button {
    background: #f0f2f0;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 1px solid #274046;
    padding: 0.55em 1em;
    color: ${props => props.inputColor || "#4286F4"};
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
      0 2px 2px 1px rgba(0, 0, 0, 0.24);
    transition: all 0.2 ease-in;
    cursor: pointer;
  }
  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12),
      0 2px 3px 2px rgba(0, 0, 0, 0.24);
  }
  button:active {
    background: #3f2b96;
    box-shadow: inset 0px 0px 5px #3f2b96;
    outline: none;
  }
  input {
    width: 255px;
    padding: 15px 20px;
    margin: 20px 15px;
    box-sizing: border-box;
    border: 2px solid #a8c0ff;
    border-radius: 3px;
  }
  error {
    color : red;
  }
`;

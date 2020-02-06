import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import {useHistory} from 'react-router-dom';

import styled from "styled-components";

import img10 from '../img/img10/AfricaFlag.png';

export default function AddProduct({ setNewProductId }) {
    const history=useHistory()
  function handleSubmit(values, actions) {
    values.user_id = 1;
    axios
      .post(
        "https://africanmarketplacebackend.herokuapp.com/api/items/addProducts",
        values
      )
      .then(res => {
        setNewProductId(res.data);
        actions.resetForm();
        history.push("/products")

      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  return (
    <StyledAdd>
      <div className="addProduct">
      <img src={img10} alt="flag" className="navbar-img10"></img>
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
            location: "",
            category: ""
          }}
          onSubmit={handleSubmit}
          render={props => (
            <Form>
              <label htmlFor="productForm_name">Name</label>
              <Field
                type="text"
                id="productForm_name"
                name="name"
                placeholder="Enter product name"
              />
              <label htmlFor="productForm__description">Description</label>
              <Field
                type="text"
                id="productForm_description"
                name="description"
                placeholder="Enter product description"
              />
              <label htmlFor="productForm__price">Price</label>
              <Field
                type="text"
                id="productForm_price"
                name="price"
                placeholder="Enter product price"
              />
              <label htmlFor="productForm__location">Location</label>
              <Field
                type="text"
                id="productForm__location"
                name="location"
                placeholder="Enter product location"
              />
              <label htmlFor="productForm__category">Category</label>
              <Field
                type="text"
                id="productForm__category"
                name="category"
                placeholder="Enter product category"
              />
              <button type="submit" disabled={props.isSubmitting}>
                {props.isSubmitting ? "Submit your product list" : "submit"}
              </button>
            </Form>
          )}
        />
      </div>
    </StyledAdd>
  );
}

const StyledAdd = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  margin: 16px auto;
  text-align: center;
  background-size: 100% 100%;
  background-image: url("https://www.pinclipart.com/picdir/big/384-3848811_african-animals-vinyl-wall-art-2083x2083-png-download.png");

  & form {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    flex-flow: column nowrap;
    margin: 16px auto;

    input {
    width: 255px;
    padding: 15px 20px;
    margin: 20px 15px;
    box-sizing: border-box;
    border: 2px solid #a8c0ff;
    border-radius: 3px;
  }

    & button {
      border-radius: 3px;
      /* padding:5px; */
      background: transparent;
      transition: 0.9s ease-in-out;
      padding: 10px 15px;
      font-size: 16px;
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
        0 2px 2px 1px rgba(0, 0, 0, 0.24);
      transition: all 0.2 ease-in;

      &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        text-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12),
          0 2px 3px 2px rgba(0, 0, 0, 0.24);
      }
      
    }
  }
`;

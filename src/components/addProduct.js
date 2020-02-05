import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import styled from 'styled-components';


export default function addProduct(){

    const[addProduct, setAddProduct] = useState([]);

    function submitHandler(values,actions){
        axios
        .post('', addProduct)
        .then(response=>{
            console.log(response.data);
            setAddProduct(response.data);

        })
        .catch(error =>{
            console.log(error);
        });
    }
    
    return(
        <div className="addProducts">
            <div className="productFrom">
            <h1>Add New Product</h1>
            <Formik
            onSubmit={submitHandler}
            validationSchema={validationSchema}
            initialValues={initialProductFormValues}
            >
                <Form>
                <label htmlFor="productForm_name">Name</label>
          <Field
            type="text"
            id="productForm_name"
            name="name"
            placeholder="Enter your name here"
          />
          <label htmlFor="productForm_description">Description</label>
          <Field
            type="text"
            id="productForm_description"
            name="description"
            placeholder="Enter the description of your product"
          />
           <label htmlFor="productForm__price">Price</label>
          <Field
            type="text"
            id="productForm__price"
            name="price"
            placeholder="Enter your price"
          />
            <label htmlFor="productForm__location">Location</label>
          <Field
            type="text"
            id="productForm__location"
            name="location"
            placeholder="Enter your location"
          />
           <label htmlFor="productForm__category">Category</label>
          <Field
            type="text"
            id="productForm__category"
            name="category"
            placeholder="Enter your category"
          />
          <button type="submit">Submit your product list</button>
                </Form>
            </Formik>
            
            </div>  
        </div>

            
    )
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter a name'),
    description: Yup.string().required('Please enter a description'),
    price: Yup.string().required('Please enter a price'),
    category: Yup.string().required('Please enter a category'),
    location: Yup.string().required('Please enter a location')
});

const initialProductFormValues = {
    name: '',
    description: '',
    price: '',
    location: '',
    category: false
  }
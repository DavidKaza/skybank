import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../shared/hooks";
import { selectUser } from "../../shared/UserSlicer";
import Button from "../Button";

const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--primary);
    color: #fff;
  }
`;

const UpdateProfile = () => {

    const [info, setInfo] = useState(
        {
            firstName: "",
            middleInitial: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: "",
            state: "",
            city: "",
            zipcode: ""
        }
    );


    function handleTransferInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInfo({
          ...info,
          [e.target.name]: value,
        });
      };

function onSubmitInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
    .patch('`http://localhost:8080', {
            
            firstName: info.firstName,
            middleInitial: info.middleInitial,
            lastName: info.lastName,
            email: info.email,
            phoneNumber: info.phoneNumber,
            country: info.country,
            state: info.state,
            city: info.city,
            zipcode: info.zipcode
    })
    .then((response) => {
        console.log(response);
    });
};
// onSubmit={onSubmitInfo}
    
    return (
        <StyledMain>
      <h1>Update Profile</h1>
      {/* <Form method='patch' onSubmit={onSubmitInfo}> 
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          value={info.firstName}
          name='firstName'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='middleInitial'>Middle Initial</label>
        <input
          id='middleInitial'
          value={info.middleInitial}
          name='middleInitial'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          value={info.lastName}
          name='lastName'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          value={info.email}
          name='email'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
          id='phoneNumber'
          value={info.phoneNumber}
          name='phoneNumber'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
         <label htmlFor='country'>Country</label>
        <input
          id='country'
          value={info.country}
          name='country'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='state'>State</label>
        <input
          id='state'
          value={info.state}
          name='state'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='city'>City</label>
        <input
          id='city'
          value={info.state}
          name='city'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
         <label htmlFor='zipcode'>Zipcode</label>
        <input
          id='zipcode'
          value={info.state}
          name='zipcode'
          type='text'
          onChange={handleTransferInputChange}
        ></input>
        <Button className='span2'>
          Update Info
        </Button>
        </Form> */}
        </StyledMain>
    );
};
export default UpdateProfile
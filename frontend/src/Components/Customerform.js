// frontend/src/components/CustomerForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css';

function CustomerForm() {
  const [customer, setCustomer] = useState({ name: '', email: '', totalSpending: 0, visits: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/customers/customer', customer);
      alert('Customer added successfully');
    } catch (error) {
      console.error(customer);
      alert('Error adding customer');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="totalSpending" placeholder="Total Spending" onChange={handleChange} />
      <input name="visits" placeholder="Visits" onChange={handleChange} />
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default CustomerForm;

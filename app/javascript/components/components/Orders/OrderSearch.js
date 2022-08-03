import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function OrderSearch() {
  const [orderId, setOrderId] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/orders/${orderId}`, {replace: true})
  }

  function handleChange(e) {
    let num = parseInt(e.target.value)
    setOrderId(num)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Order Number
        <input type="text" name="orderId" value={orderId} onChange={(e) => handleChange(e)} />
      </label>
      <input type="submit" value="Submit" />
    </Form>
  )
}
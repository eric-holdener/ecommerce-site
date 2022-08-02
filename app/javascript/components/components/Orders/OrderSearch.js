import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function OrderSearch() {
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/orders/${orderId}`, {replace: true})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Order Number
        <input type="text" name="orderId" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </Form>
  )
}
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import React from 'react';

export default function AuthChecker(props) {
  const { loggedInUser } = useContext(UserContext);
  if (!loggedInUser) {
    return (
      <Navigate to="/login"/>
    );
  } else {
    return props.children;
  }

}
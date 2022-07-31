import { NavLink } from "react-router-dom"
import ShoppingCart from "../Cart/ShoppingCart"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import React from 'react';

export default function Header(props) {
const { loggedInUser } = useContext(UserContext);
  return(
    <div className="header">
      <div className="headerSub">
        <NavLink to={"/"} className="headerLinksHome">Home</NavLink>
      </div>
      <div className="headerSub">
        {loggedInUser ? (
          <NavLink to={"/user"} className="headerLinksUser">User</NavLink>
        ) : (
          <NavLink to={"/login"} className="headerLinksUser">Login</NavLink>
        )}
        <ShoppingCart className="headerLinks"/>
      </div>
    </div>
  )
}
import Header from "./Header"
import Footer from "./Footer"
import React from 'react';

export default function HeaderFooter(props) {
  return(
    <>
      <Header />
      <>{props.children}</>
      <Footer />
    </>
  )
}
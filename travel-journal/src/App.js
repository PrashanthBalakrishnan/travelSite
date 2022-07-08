import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data"

export default function App() {
  const cardData = data.map(item => <Hero id={item.id} {...item} />)
  return (
    <>

      <Navbar />
      {cardData}

    </>
  )
}
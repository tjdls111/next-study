'use client'
import React, { useEffect, useState } from 'react';

export default function FunArticle() {
const [text,setText]=useState('')

useEffect(()=>{
  fetch('https://meowfacts.herokuapp.com')
  .then((res)=> res.json())
  .then((res)=>{
    setText(res.data[0])
  })
},[])

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

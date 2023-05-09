import React from 'react';
type Props = {
  params:{
    slug:string;
  }
}
export default function Item(props:Props) {
console.log(props)
  return (
    <div>
      Name: {props.params.slug}
    </div>
  );
}

export function generateStaticParams(){
  const products = ['chocolate','candy']
  return products.map(product => ({
    slug: product
  }))
}
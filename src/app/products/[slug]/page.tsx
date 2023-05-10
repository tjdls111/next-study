import React from 'react';
import {notFound} from 'next/navigation'
type Props = {
  params:{
    slug:string;
  }
}
import type { Metadata } from 'next';

export async function generateMetadata({ params }:Props): Promise<Metadata> {
  return { title: `product | ${params.slug}`};
}


export default function Item(props:Props) {
console.log(props)

if (props.params.slug === '404'){
  notFound()
}
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
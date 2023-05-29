import React from 'react';
import {notFound} from 'next/navigation'
type Props = {
  params:{
    slug:string;
  }
}
import type { Metadata } from 'next';
import { getProduct, getProducts } from '@/service/products';

export async function generateMetadata({ params }:Props): Promise<Metadata> {
  return { title: `product | ${params.slug}`};
}


export default async function Item(props:Props) {
const product = await getProduct(props.params.slug)

if (!product){
  notFound()
}
  return (
    <div>
      Name: {product.name}
      <br/>
      Description: {product.description}

    </div>
  );
}

export const  generateStaticParams = async () =>{
  const products = await getProducts()
  return products.map(product => ({
    slug: product.id
  }))
}
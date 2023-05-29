import Link from 'next/link';
import React from 'react';
import styles from './layout.module.css'
import type { Metadata } from 'next';
import { getProducts } from '@/service/products';
import FunArticle from '@/components/FunArticle';
 
export const metadata: Metadata = {
  title: 'product',
  description: 'awesome product',
};
 

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await getProducts()

  return (
    <div>
      <FunArticle/>

      <hr/>
      <nav className={styles.nav}>
      <h2 className={styles.subTitle}>products</h2>
        {
          products.map((product,idx) => (
            <Link key={idx} href={`/products/${product.id}`}>{product.name}</Link>
            ))}
          </nav>
          <hr/>
          {children}
      </div>
  );
}


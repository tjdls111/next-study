import Link from 'next/link';
import React from 'react';
import styles from './layout.module.css'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <hr/>
        <h2 className={styles.subTitle}>products</h2>
        <nav className={styles.nav}>
          <Link href="/products/pants">Pants</Link>
          <Link href="/products/shirts">Shirts</Link>
          <Link href="/products/necklace">Neck lace</Link>
          <Link href="/products/earring">Ear ring</Link>
        </nav>
      <hr/>
        {children}

    </div>
  );
}


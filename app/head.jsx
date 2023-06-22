'use client';
import Head from 'next/head';

const IndexHead = ({ children }) => {
  return (
    <Head>
      {children}
      <title>Dupadupa</title>
    </Head>
  );
};
export default IndexHead;
